<?php
    function csvToTable() {
        //open csv file
        $file = fopen("data.csv","r");
        //parse csv fields into array
        $data = fgetcsv($file);

        echo $data[1];
    }
?>