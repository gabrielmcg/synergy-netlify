# OS Deployment Plans


The solution delivers two artifact bundles, one for Windows Server 2016 systems and one for Red Hat Linux 7 systems. 
Each artifact bundle contains one Deployment Plan, one OS Build Plan and all dependent Plan Scripts.

The artifact bundles are included in the Docker-Synergy repository:

```
# cd ~/Docker-Synergy
# ls ./files/ImageStreamer

HPE_RHEL7_2019_02_25.zip
HPE_WIN2016_2019-03-15.zip
```

In the Image Streamer UI, use the `Add Artifact bundle` button in the `Artifact Bundles` screen to upload the two files. 
When the upload is finished, select the Artifact bundles corresponding to the files (without the .zip extension) 
and use the `Action` button to extract artifacts from the bundles, as shown in the following figure.

![ "Extract bundle"][media-bm-extract-bundle]

**Figure.** Extract bundle




[media-bm-extract-bundle]:<../media/bm-extract-bundle.png>     

