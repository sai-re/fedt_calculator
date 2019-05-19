<?php
    function csvToTable() {
        //open csv file
        $file = fopen("data.csv","r");
        //parse csv fields into array
        $data = fgetcsv($file);

        //variable for header row
        $row = 1;

        //check if open is true
        if (($file = fopen("data.csv", "r")) !== FALSE) {
            //create table body
            echo '<table class="csvTable">';
            
            //loop through parsed array
            while (($data = fgetcsv($file)) !== FALSE) {

                //for first set of value create head tags
                if ($row == 1) {
                    echo '<thead><tr>';
                } else {
                    echo '<tr>';
                }

                //loop through each value in array
                foreach ($data as $cell) {
                    //for row one add first 4 values to header cells
                    if ($row == 1) {
                        echo '<th class="csvTable__head">'.$cell.'</th>';
                    } else{
                        echo '<td class="csvTable__cell">'.$cell.'</td>';
                    }
                }

                //closing tags for header open body tag for next iteration
                if ($row == 1) {
                    echo '</tr></thead><tbody>';
                } else{
                    echo '</tr>';
                }

                //increment row for next iteration
                $row++;
            }

            echo '</tbody></table>';
        }
        
        //close open file
        fclose($file);
    }
?>