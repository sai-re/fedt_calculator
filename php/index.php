<?php
    require_once 'Calculations.php'
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSV Calculations</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <main>
        <section class="container">
            <?php
                csvToTable();
            ?>
        </section>
    </main>
</body>
</html>