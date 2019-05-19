<?php
    function csvToTable() {
        //open csv file
        $file = fopen("data.csv","r");
        //parse csv fields into array
        $data = fgetcsv($file);

        //check if open is true
        if (($file = fopen("data.csv", "r")) !== FALSE) {
            //create table body
            echo '<table class="csvTable">';

            
            //loop through parsed array
            while (($data = fgetcsv($file)) !== FALSE) {
                //create row tag
                echo '<tr>';

                //loop through each value in array
                foreach ($data as $cell) {
                    echo '<td class="csvTable__cell">'.$cell.'</td>';
                }

                echo '</tr>';
            }

            echo '</tbody></table>';
        }
        //close open file
        fclose($file);
    }
?>