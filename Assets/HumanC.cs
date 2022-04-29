using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Nethereum.JsonRpc.UnityClient;
using UnityEngine.UI;
using System.Runtime.InteropServices;

public class HumanC : MonoBehaviour
{
	public Text Value;
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
        // StartCoroutine(GetBlockNumber());
        Destroy(collision.gameObject);
        Value.text= "Great!TokenCounter324";
    }


    private IEnumerator GetBlockNumber()
    {
        string url = "https://mainnet.infura.io/v3/9fe4e5215d2d43e8b756c0ab71ceb7fe";
        var tokenCounterRequest = new EthBlockNumberUnityRequest(url);
        yield return tokenCounterRequest.SendRequest();
        print(tokenCounterRequest.Result.Value);
    }
}
