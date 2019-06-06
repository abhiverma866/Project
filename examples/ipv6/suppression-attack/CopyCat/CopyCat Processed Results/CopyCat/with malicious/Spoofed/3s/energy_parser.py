import xlsxwriter

def process_line(x):
    msgArray = x.split("\t")
    #print(msgArray[2])
    msgArray2 = msgArray[2].split(" ")
    try:
        if msgArray2[2] == "P":
            msgArray3 = msgArray[1].split(':')
            if msgArray3[1] == "1":
                entry_n1.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "2":
                entry_n2.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "3":
                entry_n3.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] =="4":
                entry_n4.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "5":
                entry_n5.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "6":
                entry_n6.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "7":
                entry_n7.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "8":
                entry_n8.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "9":
                entry_n9.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "10":
                entry_n10.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "11":
                entry_n11.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "12":
                entry_n12.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "13":
                entry_n13.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "14":
                entry_n14.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "15":
                entry_n15.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "16":
                entry_n16.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "17":
                entry_n17.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "18":
                entry_n18.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "19":
                entry_n19.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "20":
                entry_n20.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "21":
                entry_n21.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "22":
                entry_n22.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "23":
                entry_n23.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "24":
                entry_n24.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "25":
                entry_n25.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "26":
                entry_n26.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "27":
                entry_n27.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "28":
                entry_n28.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "29":
                entry_n29.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            elif msgArray3[1] == "30":
                entry_n30.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            else :
                entry_n31.append([msgArray2[5],msgArray2[6],msgArray2[7],msgArray2[8]])
            
    except Exception:
        pass 

for i in range(1,11):
    input_file = open(".//" + str(i) + "//serial.log", "r", encoding = 'utf-8')
    dest_filename = "M_S_3s_" + str(i) + "_energyConsumption.xlsx"

    # Create a workbook and add a worksheet.
    workbook = xlsxwriter.Workbook(dest_filename)

    sheet1 = workbook.add_worksheet('BR Node 1');
    sheet2 = workbook.add_worksheet('Node 2');
    sheet3 = workbook.add_worksheet('Node 3');
    sheet4 = workbook.add_worksheet('Node 4');
    sheet5 = workbook.add_worksheet('Node 5');
    sheet6 = workbook.add_worksheet('Node 6');
    sheet7 = workbook.add_worksheet('Node 7');
    sheet8 = workbook.add_worksheet('Node 8');
    sheet9 = workbook.add_worksheet('Node 9');
    sheet10 = workbook.add_worksheet('Node 10');
    sheet11 = workbook.add_worksheet('Node 11');
    sheet12 = workbook.add_worksheet('Node 12');
    sheet13 = workbook.add_worksheet('Node 13');
    sheet14 = workbook.add_worksheet('Node 14');
    sheet15 = workbook.add_worksheet('Node 15');
    sheet16 = workbook.add_worksheet('Node 16');
    sheet17 = workbook.add_worksheet('Node 17');
    sheet18 = workbook.add_worksheet('Node 18');
    sheet19 = workbook.add_worksheet('Node 19');
    sheet20 = workbook.add_worksheet('Node 20');
    sheet21 = workbook.add_worksheet('Node 21');
    sheet22 = workbook.add_worksheet('Node 22');
    sheet23 = workbook.add_worksheet('Node 23');
    sheet24 = workbook.add_worksheet('Node 24');
    sheet25 = workbook.add_worksheet('Node 25');
    sheet26 = workbook.add_worksheet('Node 26');
    sheet27 = workbook.add_worksheet('Node 27');
    sheet28 = workbook.add_worksheet('Node 28');
    sheet29 = workbook.add_worksheet('Node 29');
    sheet30 = workbook.add_worksheet('Node 30');
    sheet31 = workbook.add_worksheet('Node 31');


    entry_n1 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n2 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n3 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n4 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n5 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n6 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n7 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n8 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n9 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n10 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n11 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n12 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n12 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n13 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n14 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n15 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n16 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n17= [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n18 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n19= [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n20 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n21 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n22 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n23 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n24 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n25= [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n26 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n27= [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n28 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n29 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n30 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]
    entry_n31 = [["ALL_CPU","ALL_LPM","ALL_TX","ALL_RX"]]

  

    for x in input_file:
        process_line(x)

    # Start from the first cell. Rows and columns are zero indexed.
    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n1):
        sheet1.write(row, col, all_cpu)
        sheet1.write(row, col + 1, all_lpm)
        sheet1.write(row, col + 2, all_tx)
        sheet1.write(row, col + 3, all_rx)
        row += 1

    # Start from the first cell. Rows and columns are zero indexed.
    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n2):
        sheet2.write(row, col, all_cpu)
        sheet2.write(row, col + 1, all_lpm)
        sheet2.write(row, col + 2, all_tx)
        sheet2.write(row, col + 3, all_rx)
        row += 1

    # Start from the first cell. Rows and columns are zero indexed.
    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n3):
        sheet3.write(row, col, all_cpu)
        sheet3.write(row, col + 1, all_lpm)
        sheet3.write(row, col + 2, all_tx)
        sheet3.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n4):
        sheet4.write(row, col, all_cpu)
        sheet4.write(row, col + 1, all_lpm)
        sheet4.write(row, col + 2, all_tx)
        sheet4.write(row, col + 3, all_rx)
        row += 1


    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n5):
        sheet5.write(row, col, all_cpu)
        sheet5.write(row, col + 1, all_lpm)
        sheet5.write(row, col + 2, all_tx)
        sheet5.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n6):
        sheet6.write(row, col, all_cpu)
        sheet6.write(row, col + 1, all_lpm)
        sheet6.write(row, col + 2, all_tx)
        sheet6.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n7):
        sheet7.write(row, col, all_cpu)
        sheet7.write(row, col + 1, all_lpm)
        sheet7.write(row, col + 2, all_tx)
        sheet7.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n8):
        sheet8.write(row, col, all_cpu)
        sheet8.write(row, col + 1, all_lpm)
        sheet8.write(row, col + 2, all_tx)
        sheet8.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n9):
        sheet9.write(row, col, all_cpu)
        sheet9.write(row, col + 1, all_lpm)
        sheet9.write(row, col + 2, all_tx)
        sheet9.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n10):
        sheet10.write(row, col, all_cpu)
        sheet10.write(row, col + 1, all_lpm)
        sheet10.write(row, col + 2, all_tx)
        sheet10.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n11):
        sheet11.write(row, col, all_cpu)
        sheet11.write(row, col + 1, all_lpm)
        sheet11.write(row, col + 2, all_tx)
        sheet11.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n12):
        sheet12.write(row, col, all_cpu)
        sheet12.write(row, col + 1, all_lpm)
        sheet12.write(row, col + 2, all_tx)
        sheet12.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n13):
        sheet13.write(row, col, all_cpu)
        sheet13.write(row, col + 1, all_lpm)
        sheet13.write(row, col + 2, all_tx)
        sheet13.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n14):
        sheet14.write(row, col, all_cpu)
        sheet14.write(row, col + 1, all_lpm)
        sheet14.write(row, col + 2, all_tx)
        sheet14.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n15):
        sheet15.write(row, col, all_cpu)
        sheet15.write(row, col + 1, all_lpm)
        sheet15.write(row, col + 2, all_tx)
        sheet15.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n16):
        sheet16.write(row, col, all_cpu)
        sheet16.write(row, col + 1, all_lpm)
        sheet16.write(row, col + 2, all_tx)
        sheet16.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n17):
        sheet17.write(row, col, all_cpu)
        sheet17.write(row, col + 1, all_lpm)
        sheet17.write(row, col + 2, all_tx)
        sheet17.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n18):
        sheet18.write(row, col, all_cpu)
        sheet18.write(row, col + 1, all_lpm)
        sheet18.write(row, col + 2, all_tx)
        sheet18.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n19):
        sheet19.write(row, col, all_cpu)
        sheet19.write(row, col + 1, all_lpm)
        sheet19.write(row, col + 2, all_tx)
        sheet19.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n20):
        sheet20.write(row, col, all_cpu)
        sheet20.write(row, col + 1, all_lpm)
        sheet20.write(row, col + 2, all_tx)
        sheet20.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n21):
        sheet21.write(row, col, all_cpu)
        sheet21.write(row, col + 1, all_lpm)
        sheet21.write(row, col + 2, all_tx)
        sheet21.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n22):
        sheet22.write(row, col, all_cpu)
        sheet22.write(row, col + 1, all_lpm)
        sheet22.write(row, col + 2, all_tx)
        sheet22.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n23):
        sheet23.write(row, col, all_cpu)
        sheet23.write(row, col + 1, all_lpm)
        sheet23.write(row, col + 2, all_tx)
        sheet23.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n24):
        sheet24.write(row, col, all_cpu)
        sheet24.write(row, col + 1, all_lpm)
        sheet24.write(row, col + 2, all_tx)
        sheet24.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n25):
        sheet25.write(row, col, all_cpu)
        sheet25.write(row, col + 1, all_lpm)
        sheet25.write(row, col + 2, all_tx)
        sheet25.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n26):
        sheet26.write(row, col, all_cpu)
        sheet26.write(row, col + 1, all_lpm)
        sheet26.write(row, col + 2, all_tx)
        sheet26.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n27):
        sheet27.write(row, col, all_cpu)
        sheet27.write(row, col + 1, all_lpm)
        sheet27.write(row, col + 2, all_tx)
        sheet27.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n28):
        sheet28.write(row, col, all_cpu)
        sheet28.write(row, col + 1, all_lpm)
        sheet28.write(row, col + 2, all_tx)
        sheet28.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n29):
        sheet29.write(row, col, all_cpu)
        sheet29.write(row, col + 1, all_lpm)
        sheet29.write(row, col + 2, all_tx)
        sheet29.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n30):
        sheet30.write(row, col, all_cpu)
        sheet30.write(row, col + 1, all_lpm)
        sheet30.write(row, col + 2, all_tx)
        sheet30.write(row, col + 3, all_rx)
        row += 1

    row = 0
    col = 0

    # Iterate over the data and write it out row by row.
    for all_cpu, all_lpm, all_tx, all_rx in (entry_n31):
        sheet31.write(row, col, all_cpu)
        sheet31.write(row, col + 1, all_lpm)
        sheet31.write(row, col + 2, all_tx)
        sheet31.write(row, col + 3, all_rx)
        row += 1

    workbook.close()
