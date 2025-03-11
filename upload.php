<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    $allowedTypes = ["iso", "zip", "rar", "tar", "gz"];
    if (!in_array($fileType, $allowedTypes)) {
        die("Định dạng không được hỗ trợ!");
    }

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        echo "Tệp " . basename($_FILES["file"]["name"]) . " đã tải lên thành công!";
    } else {
        echo "Tải lên thất bại!";
    }
}
?>