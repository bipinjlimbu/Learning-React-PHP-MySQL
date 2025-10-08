<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include 'connectDB.php';
    $objDb = new connectDB();
    $conn = $objDb->connect();

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case "GET":
        $sql = "SELECT * FROM user";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;

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