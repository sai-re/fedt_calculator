<?php
    function csvToTable() {
        //open csv file
        $file = fopen("data.csv","r");
        //parse csv fields into array
        $data = fgetcsv($file);

        //variable for header row
        $row = 1;

        //function to check if row is head or cell
        function insertTags($row, $head, $cells) {
            if ($row == 1) {
                echo $head;
            } else {
                echo $cells;
            }
        };

        //check if open is true
        if (($file = fopen("data.csv", "r")) !== FALSE) {
            //create table body
            echo '<table class="csvTable">';
            
            //loop through parsed array
            while (($data = fgetcsv($file)) !== FALSE) {

                //for first set of value create head tags
                $headRow = '<thead><tr>';
                $cellsRow = '<tr>';
                insertTags($row, $headRow, $cellsRow);

                //loop through each value in array
                foreach ($data as $cell) {
                    //for row one add first 4 values to header cells
                    $headCell = '<th class="csvTable__head">'.$cell.'</th>';
                    $cell = '<td class="csvTable__cell">'.$cell.'</td>';
                    insertTags($row, $headCell, $cell);
                }

                //closing tags for header open body tag for next iteration
                $headClose = '</tr></thead><tbody>';
                $cellsClose = '</tr>';
                insertTags($row, $headClose, $cellsClose);

                //increment row for next iteration
                $row++;
            }

            echo '</tbody></table>';
        }

        //close open file
        fclose($file);
    }
?>