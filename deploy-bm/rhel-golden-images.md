# RHEL Golden Images



## OS installation and configuration with HPE Synergy Image Streamer

The worker nodes will be deployed and customized using HPE Synergy Image Streamer. This section outlines the steps required to install the
host. At a high level, these steps can be described as:

1. Download the artifacts for HPE Image Streamer from the HPE GitHub site.
2. Add the artifact bundles to HPE Image Streamer.
3. Prepare a compute module for the installation of the Operating System.
4. Create a Server Profile.
5. Install and customize the Operating System.
6. Capture a Golden Image from the compute module.
7. Deploy the hosts.


## Download the artifacts for HPE Synergy Image Streamer

Red Hat Enterprise Linux bundles for HPE Image Streamer may be downloaded from 
[https://github.com/HewlettPackard/image-streamerrhel/tree/V4.1/artifact-bundles/](https://github.com/HewlettPackard/image-streamerrhel/tree/V4.1/artifact-bundles/).
Sample foundation artifact bundles should be downloaded from
[https://github.com/HewlettPackard/imagestreamer-tools/tree/v4.0/foundation/artifact-bundles](https://github.com/HewlettPackard/imagestreamer-tools/tree/v4.0/foundation/artifact-bundles). 
The artifacts utilized in the creation of this solution may be found at
[https://github.com/HewlettPackard/image-streamer-reference-architectures/tree/master/RC-RHEL-OpenShift-Synergy](https://github.com/HewlettPackard/image-streamer-reference-architectures/tree/master/RC-RHEL-OpenShift-Synergy).


## Add the artifact bundles to HPE Image Streamer

1. From within the HPE Image Streamer interface navigate to the Artifact Bundles page.
2. From the Actions menu, Add the downloaded RHEL artifact bundle. If not already present, add the sample foundation bundle.
3. From the Actions menu, select Extract to extract the artifacts from each downloaded bundle.
Prepare the compute module for the installation of the Operating System
1. Attach a Red Hat Enterprise Linux 7.5 Server ISO to the iLO of a worker node host by selecting the Action menu and then Launch Console.
2. When the console launches, select Virtual Drives and then Image File CD-ROM/DVD. Browse to the location where your ISO resides and select
it.

## Create a Server Profile
1. Use the Server Profile Template you created in Figure 8 to deploy a new Server Profile to the worker node host you attached the ISO to in the
prior step.
2. Select the new Server Profile and choose Edit.
3. Under the OS Deployment section, choose HPE-Create Empty Volume and enter a Volume Size of 30720 MB.
4. Validate the network and SAN connections exist on the host.
5. Insure that under boot settings that Boot mode is set to UEFI optimized and that the Primary boot device is Hard disk.
6. Click OK. It will take some time for the profile to create.
7. While waiting on profile creation to complete, select the Actions menu and then click Launch Console. Click Allow to launch the console.

## Install and customize the Operating System
1. After profile creation is completed, power on the server. From the console window, select Power Switch and then Momentary Press.
2. When the screen shown in the following figure appears, select Install Red Hat Enterprise Linux 7.5 and then hit the letter ‘e’ on the keyboard.

    ![ "Selecting OS to install"][media-bm-rhel-boot-params]

    **Figure.** Selecting OS to install

3. Append the following to the install kernel boot parameter: `rd.iscsi.ibft=1`
4. Type `Ctrl-x` to continue the boot process.
5. When the installer screen appears, insure you select your local language, set the date and time, 
keyboard layout and language support. When done, click `Installation Destination`.
6. At the Installation Destination screen, select `Add a disk…` and then choose the `30 GiB` volume from HPE Image Streamer. Select 
`Done` once you have chosen this disk.
7. Under `Other Storage Options`, select the radio button for `I will configure partitioning` and then click `Done`.
8. At the `Manual Partitioning` screen, select `Click here to create them automatically`. This will display a new Manual Partitioning screen.
9. Highlight the `/boot` partition and on the right side of the page select `ext4` as the `File System`. Click the `Update Settings` button.
10. Highlight the `/` partition and on the right side of the screen, reduce the `Desired Capacity` to `8 GiB` and then choose `ext4` as the File System. Click the `Update Settings` button.
11. Highlight the `swap` partition and on the right side of the screen, change `Desired Capacity` from `3000 MiB` to `4092 MiB`. 
Click the `Update Settings` button.
12. Click the `“+”` button below the list of partitions. For `Mount Point`, select `/var` from the dropdown and 
leave the `Desired Capacity` blank. This will allow the `/var` partition to use all remaining space.
13. At the `Manual Partitioning` screen, highlight the `/var` partition and choose `/ext4` for the `File System`. Click `Update Settings`.
14. The screen should appear as shown in the following figure.

    ![ "Manual partitioning"][media-bm-rhel-customizing-disk-partitions]

    **Figure.** Manual partitioning

15. Once you have validated the file systems and partition sizes are correct, click `Done`.
16. When prompted, click `Accept Changes`.

[media-bm-rhel-boot-params]:<../media/bm-rhel-boot-params.png>     
[media-bm-rhel-customizing-disk-partitions]:<../media/bm-rhel-customizing-disk-partitions.png>   



