<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include 'connectDB.php';
    $objDb = new connectDB();
    $conn = $objDb->connect();

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case "POST":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "INSERT INTO user(id, name, email, number, address, created_at) VALUES(null, :name, :email, :number, :address, :created_at)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':number', $user->number);
            $stmt->bindParam(':address', $user->address);
            $stmt->bindParam(':created_at', $created_at);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($response);
            break;
        
    }
?>