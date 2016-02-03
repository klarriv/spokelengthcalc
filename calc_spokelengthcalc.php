<?php
	$j = $f1 = $f2 = $t1 = $t2 = $a1 = $a2 = $n = $c1 = $c2 = $row1 = $e = "";

	$results = array(
		array("","","","","","","","","",""),
		array("","","","","","","","","","")
		);

	if ($_SERVER["REQUEST_METHOD"] == "POST"){
		$j = test_input($_POST['j']);
		$f1 = test_input($_POST['f1']);
		$f2 = test_input($_POST['f2']);
		$t1 = test_input($_POST['t1']);
		$t2 = test_input($_POST['t2']);
		$e = test_input($_POST['e']);
		if ($e != ""){
			$a1 = test_input($_POST['a1']) - ($e/2);
			if(test_input($_POST['a2']) != ""){
				$a2 = test_input($_POST['a2']) - ($e/2);
			}
		}
		else {
			$a1 = test_input($_POST['a1']);
			$a2 = test_input($_POST['a2']);
		}
		$n = test_input($_POST['n']);
		$c1 = test_input($_POST['c1']);
		$c2 = test_input($_POST['c2']);

		$row1 = $j * $j;

		$results[0][0] = round($f1 * $f1, 2);
		$results[0][1] = round(4 * $a1 * $a1, 2);
		$results[0][2] = round($row1 + $results[0][0] + $results[0][1], 2);
		$results[0][3] = round(2 * $j * $f1, 2);
		$results[0][4] = round(cos(deg2rad(720*$c1/$n)), 3);
		$results[0][5] = round($results[0][3] * $results[0][4], 2);
		$results[0][6] = round($results[0][2] - $results[0][5], 2);
		$results[0][7] = round(sqrt($results[0][6]), 2);
		$results[0][8] = round($results[0][7] - $t1, 2);
		$results[0][9] = round($results[0][8]/2, 2);

		if ($f2 != "" && $t2 != "" && $a2 != "" && $c2 != "") {
			$results[1][0] = round($f2 * $f2, 2);
			$results[1][1] = round(4 * $a2 * $a2, 2);
			$results[1][2] = round($row1 + $results[1][0] + $results[1][1], 2);
			$results[1][3] = round(2 * $j * $f2, 2);
			$results[1][4] = round(cos(deg2rad(720*$c2/$n)), 3);
			$results[1][5] = round($results[1][3] * $results[1][4], 2);
			$results[1][6] = round($results[1][2] - $results[1][5], 2);
			$results[1][7] = round(sqrt($results[1][6]), 2);
			$results[1][8] = round($results[1][7] - $t2, 2);
			$results[1][9] = round($results[1][8]/2, 2);
		}
	}

	function test_input($data){
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	function resetInputs(){
		$j = $f1 = $f2 = $t1 = $t2 = $a1 = $a2 = $n = $c1 = $c2 = $row1 = "";
		for ($i=0; $i < count($results); $i++) { 
			for ($j=0; $j < count($results[0]); $j++) { 
				$results[i][j] = 0;
			}
		}
	}
?>