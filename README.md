![Node.js CI](https://github.com/cmwylie19/service-mesh/workflows/Node.js%20CI/badge.svg)    
[![codecov](https://codecov.io/gh/cmwylie19/service-mesh/branch/master/graph/badge.svg?token=QOB0YLAC7G)](https://codecov.io/gh/cmwylie19/service-mesh)

# Deploy Cluster in GKE

## Create cluster
<!-- ```

   export M_TYPE=n1-standard-2 && \
   export ZONE=us-east1-b && \
   export CLUSTER_NAME=listio-cluster && \
   gcloud services enable container.googleapis.com && \
   gcloud container clusters create  --enable-network-policy $CLUSTER_NAME \
   --cluster-version latest \
   --machine-type=$M_TYPE \
   --num-nodes 3 \
   --zone $ZONE \
   --project $PROJECT_ID
``` -->

```
export PROJECT_ID=`gcloud config get-value project` && \
export ZONE=us-east1-b && \
export CLUSTER_NAME=listio-cluster && \
gcloud beta container clusters create $CLUSTER_NAME \
    --enable-network-policy \
    --addons=Istio --istio-config=auth=MTLS_STRICT \
    --cluster-version latest \
    --machine-type=n1-standard-2 \
    --num-nodes=3 \
    --zone=us-east1-b \
    --project $PROJECT_ID
``

## Download istio
```
istioctl install --set profile=demo -y
```

## Label target namespace
```
kubectl label namespace default istio-injection=enabled
```

## Apply yaml to create application
```
oc apply -f webapp-v2.yaml
```

## Verify application is working interally
```
kubectl exec "$(kubectl get pod -l app=webapp -o jsonpath='{.items[0].metadata.name}')" -c webapp -- curl -s webapp:80/ | grep -o "<head>.*</head>"
```

## Apply ingress gatway
```
kubectl apply -f webapp-gateway.yaml
```

## Set ingress ip and ports
```
export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].port}')
export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].port}')
```

## Set gateway URL
```
export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT
```
