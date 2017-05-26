// to be run using nodejs
var json2yaml = require('../index');
function test(obj) {
  console.log('TESTING:');
  console.log(obj);
  console.log('OUTPUT:');
  console.log(json2yaml(obj));
  console.log('------------------------');
}

test([ 'hello', 'world' ]);
test({ hello: 'world' });
test({ hello: 'world', hello2: 'world2' });
test({ hello: 'world', hello2: [ 'hello', 'world' ] });
test({ hello: 'world', hello2: [ 'hello', 'world' ] });
test([ 'hello', { hello: 'world', hello2: [ 'hello', 'world' ] }, 'world' ]);
test([ 'hello', { hello: 'world', hello2: [ 'hello', 'world', { hello3: 'world3' } ] }, 'world' ]);
test({ hello: 1 });
test({ hello: true });
test({ hello: '你好， 世界！'});
test({ hello: '#你好， 世界！'});
test({ hello: '\\你好， 世界！'});
test({ hello: '"你好， 世界！'});
test({ hello: '%你好， 世界！'});
test({
  "status": true,
  "lastUpdateTime": "2017-03-02T05:41:47Z",
  "schedule": "every @6m"
});
test({
  "kind": "Deployment",
  "metadata": {
    "name": "appscode-voyager",
    "namespace": "default",
    "selfLink": "/apis/extensions/v1beta1/namespaces/default/deployments/appscode-voyager",
    "uid": "c424855e-3962-11e7-a602-12f236046fba",
    "resourceVersion": "15275024",
    "generation": 1,
    "creationTimestamp": "2017-05-15T11:36:41Z",
    "labels": {
      "run": "appscode-voyager"
    },
    "annotations": {
      "deployment.kubernetes.io/revision": "1"
    }
  },
  "spec": {
    "replicas": 1,
    "selector": {
      "matchLabels": {
        "run": "appscode-voyager"
      }
    },
    "template": {
      "metadata": {
        "creationTimestamp": null,
        "labels": {
          "run": "appscode-voyager"
        }
      },
      "spec": {
        "volumes": null,
        "containers": [
          {
            "name": "appscode-voyager",
            "image": "appscode/voyager:update-fix",
            "args": [
              "--cloud-provider=aws",
              "--cluster-name=h505",
              "--v=5"
            ],
            "ports": [
              {
                "name": "zero",
                "containerPort": 1234,
                "protocol": "TCP"
              }
            ],
            "resources": {},
            "terminationMessagePath": "/dev/termination-log",
            "imagePullPolicy": "IfNotPresent"
          }
        ],
        "restartPolicy": "Always",
        "terminationGracePeriodSeconds": 30,
        "dnsPolicy": "ClusterFirst",
        "serviceAccountName": "",
        "securityContext": {}
      }
    },
    "strategy": {
      "type": "RollingUpdate",
      "rollingUpdate": {
        "maxUnavailable": 1,
        "maxSurge": 1
      }
    }
  },
  "status": {
    "observedGeneration": 1,
    "replicas": 1,
    "updatedReplicas": 1,
    "availableReplicas": 1,
    "conditions": [
      {
        "type": "Available",
        "status": "True",
        "lastUpdateTime": "2017-05-15T11:36:41Z",
        "lastTransitionTime": "2017-05-15T11:36:41Z",
        "reason": "MinimumReplicasAvailable",
        "message": "Deployment has minimum availability."
      }
    ]
  }
});
