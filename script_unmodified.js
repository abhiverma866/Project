//try { load("nashorn:mozilla_compat.js"); } catch(e) {}
//importClass(org.contikios.cooja.plugins.ScriptRunner);
//Added
TIMEOUT(900000, log.log("Performance Calculation" + "\n"));

packetsReceived= new Array();
packetsSent = new Array();
//timeReceived = new Array();
//timeSent = new Array();
//count = new Array();
//timeSent = 0;
//timeReceived = 0;
//count = 0;
nodeCount = 31;
//data_length = 23;
senderID = 0;
receiverID = 0;
PDR=0;
//e_count = 0;

for(i = 1; i <= nodeCount; i++){
    packetsReceived[i] = 0;
    packetsSent[i] = 0;
    //timeSent[i] = 0;
    //timeReceived[i] = 0;
}

/*
Format of serial data for sending and receiving.

01:05.273	ID:5	Sending DATA to 1 'Hello 2' with NodeID= 5
01:05.275	ID:5	Data is Hello 2 from the client
01:05.294	ID:1	Received DATA recv 'Hello 2 from the client' from 5 at NodeID= 1
*/

/*
Formula for calculating packet delay.
i = packet sequence number
count = Total packet count
delay[i] = receiving_time[i] – sending_time[i]
Total_Delay = Total_Delay + delay[i]
Average_Delay = Total_Delay / count
*/

while(1){
    YIELD();
    msgArray = msg.split(' ');
    //log.log(msgArray+ "\n");
    //log.log(msgArray[0]+ " " + msgArray[1]);
    //log.log(msgArray.length + "\n");
    if(msgArray.length == 9){
        //log.log("Inside If 1" + "\n");
        if(msgArray[0].equals("Sending")){
            // sent packet
            senderID = parseInt(msgArray[8]);
            packetsSent[senderID]++;
            //timeSent[senderID] = time;
            //timeSent = time;
            //log.log("Time Sent" + timeSent[senderID] + "\n");
        }
    }
    if(msgArray.length == 14){
        //log.log("Inside If 2" + "\n");
        if(msgArray[0].startsWith("Received")){
            //log.log(msgArray.length + "\n");
            receiverID = parseInt(msgArray[13]);
            packetsReceived[receiverID]++;
            //timeReceived[receiverID] = time;
            //log.log("Time Received" + timeReceived[receiverID] + "\n");
            //log.log("receiverID " + receiverID + " PacketReceived= " +packetsReceived[receiverID] + "\n");
                //if (timeReceived[receiverID] > 0){
                //    count[receiverID]++;
                //}       
            //totalReceived = totalSent = totalDelay = totalCount = 0;
            totalReceived = totalSent = 0;
            //totalclient=0;
            for(i = 1; i <= nodeCount; i++){
                //totalclient++;
                //totalDelay = totalDelay + (timeReceived[i]-timeSent[i]);
                //totalCount = totalCount + count[i];
                totalReceived += packetsReceived[i];
                totalSent += packetsSent[i];
                //og.log("MoteID= " + i + " ReceivedPackets= " + packetsReceived[i] + " SendingPackets= " + packetsSent[i] + "\n");
            }
            //log.log("totalDelay= " + totalDelay + "\n");
            //log.log("totalCount= " + totalCount + "\n");
            //log.log("Generated Packets " + totalSent + "\n");
            //log.log("ReceivedPackets " + totalReceived + "\n");
            PDR=(totalReceived / totalSent);
            //AE2ED=(totalDelay/totalCount);
            log.log("Packet Delivery Ratio " + PDR + "\n");
            //log.log("Average End to End Delay " + AE2ED + "\n");
        }
    }  
}


