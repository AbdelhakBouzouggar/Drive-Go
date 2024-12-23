<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

include('../../Connection/connect.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (isset($input['user_id'])) {
        $userId = $input['user_id'];

        try {
            $query = $connexion->prepare("DELETE FROM Users WHERE user_id = :userId");
            $query->bindParam(':userId', $userId, PDO::PARAM_INT);
            $query->execute();

            if ($query->rowCount() > 0) {
                echo json_encode(["success" => "User removed successfully"]);
            } else {
                echo json_encode(["error" => "No such User found"]);
            }
        } catch (Exception $e) {
            echo json_encode(["error" => "Database error: " . $e->getMessage()]);
        }
    } else {
        echo json_encode(["error" => "Invalid input data"]);
    }
} else {
    echo json_encode(["error" => "Invalid request"]);
}
