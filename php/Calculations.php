<?php
    function csvToTable() {
        //open csv file
        $file = fopen("data.csv","r");
        //parse csv fields into array
        $data = fgetcsv($file);
        
        //check if open is true
        if (($file = fopen("data.csv", "r")) !== FALSE) {
            //loop through parsed array
            while (($data = fgetcsv($file)) !== FALSE) {
                //loop through each value in array
                foreach ($data as $cell) {
                    echo $cell;
                }
            }
        }
    }
?>