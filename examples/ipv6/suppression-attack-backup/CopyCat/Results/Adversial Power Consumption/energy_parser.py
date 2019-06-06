import xlsxwriter

def process_line(x):
    msgArray = x.split("\t");
    #print(msgArray[2])
    msgArray2 = msgArray[2].split(" ")
    try:
        if msgArray2[2] == "P":
            msgArray3 = msgArray[1].split(':')
            if msgArray3[1] == "32":
                entry_n1.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
             
    except Exception:
        pass 

for i in range(1,2):
    input_file = open(".//" + str(i) + "//serial.log", "r", encoding = 'utf-8')
    dest_filename = "M_NS_1s_" + str(i) + "_energyConsumption.xlsx"

    # Create a workbook and add a worksheet.
    workbook = xlsxwriter.Workbook(dest_filename)

    sheet32 = workbook.add_worksheet('Node 32');
    entry_n32 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]

  

    for x in input_file:
        process_line(x)

    # Start from the first cell. Rows and columns are zero indexed.
    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n32):
        sheet1.write(row, col, all_cpu)
        sheet1.write(row, col + 1, all_lpm)
        sheet1.write(row, col + 2, all_tx)
        sheet1.write(row, col + 3, all_rx)
        row += 1

   
    workbook.close()
