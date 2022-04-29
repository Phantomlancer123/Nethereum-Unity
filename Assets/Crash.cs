using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Nethereum.JsonRpc.UnityClient;

public class Crash : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    void OnCollisionEnter(Collision collision)
    {
        StartCoroutine(GetBlockNumber());
        Destroy(gameObject);
        
    }
    private IEnumerator GetBlockNumber()
    {
        string url = "https://mainnet.infura.io/v3/9fe4e5215d2d43e8b756c0ab71ceb7fe";
        var blockNumberRequest = new EthBlockNumberUnityRequest(url);
        yield return blockNumberRequest.SendRequest();
        print(blockNumberRequest.Result.Value);
    }
}
