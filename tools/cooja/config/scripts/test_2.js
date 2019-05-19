try { load("nashorn:mozilla_compat.js"); } catch(e) {}
importClass(org.contikios.cooja.plugins.ScriptRunner);

TIMEOUT(300000, log.log("Performance Calculation" + "\n"));

packetsReceived= new Array();
packetsSent = new Array();
timeReceived = new Array();
timeSent = new Array();
count = new Array();
nodeCount = 10;
//data_length = 23;
senderID = 0;
receiverID = 0;
PDR=0;
//e_count = 0;

for(i = 1; i <= nodeCount; i++){
    packetsReceived[i] = 0;
    packetsSent[i] = 0;
    timeSent[i] = 0;
    timeReceived[i] = 0;
}

/*
DATA send to 1 'Hello 1'
Data is Hello 1 from the client
DATA recv 'Hello 1 from the client' from 5
*/

while(1){
    YIELD();
    msgArray = msg.split(' ');
    if(msgArray[1].startsWith("DATA send")){  
        if(msgArray.length == 6){
            // sent packet
            senderID = parseInt(msgArray[3]);
            packetsSent[senderID]++;
            timeSent[senderID] = time;
        }
    }
    if(msgArray[1].startsWith("DATA recv")){
        if(msgArray.length == 9){
            receiverID = parseInt(msgArray[8]);
            packetsReceived[receiverID]++;
            timeReceived[receiverID] = time;
            log.log("receiverID " + receiverID + " PacketReceived= " +packetsReceived[receiverID] + "\n");
                if (timeReceived[receiverID] > 0){
                    count[receiverID]++
                }       
            totalReceived = totalSent = 0;
            totalclient=0;
            for(i = 1; i <= nodeCount; i++){
                totalclient++;
                totalReceived += packetsReceived[i];
                totalSent += packetsSent[i];
                log.log("MoteID= " + i + " ReceivedPackets= " + packetsReceived[i] + " SendingPackets= " + packetsSent[i] + "\n");
            }

            log.log(" Generated Packets " + totalSent + "\n");
            log.log(" ReceivedPackets " + totalReceived + "\n");
            PDR=(totalReceived / totalSent) * 100
            log.log("Packet Delivery Ratio" + PDR + "\n");
        }
    }   
}