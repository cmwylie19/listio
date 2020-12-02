![Node.js CI](https://github.com/cmwylie19/service-mesh/workflows/Node.js%20CI/badge.svg)    
[![codecov](https://codecov.io/gh/cmwylie19/service-mesh/branch/master/graph/badge.svg?token=QOB0YLAC7G)](https://codecov.io/gh/cmwylie19/service-mesh)

# Deploy Cluster in GKE
```
gcloud beta container clusters create listio-cluster  --addons=Istio --istio-config=auth=MTLS_STRICT --c
luster-version=1.16.13-gke.401    --machine-type=n1-standard-2     --num-nodes=3 --region=us-east1-b
```

# Deployment on Google Kubernetes Engine

## Sign in
```
gcloud container clusters get-credentials --zone us-east1-b  listio-cluster
```

## Deployment
```
kubectl create deployment hello-server --image=docker.io/cmwylie19/listo-webapp:latest
```

## Expose a Load Balancing Service
```
kubectl expose deployment hello-server --type LoadBalancer \
  --port 80 --target-port 80
```

## Create Service Account 
```
kubectl create serviceaccount --namespace kube-system tiller
```

## Create a Cluster Role Binding
```
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
```