async function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const message = document.getElementById("message");

    if (!fileInput.files.length) {
        message.textContent = "Vui lòng chọn file!";
        return;
    }

    let formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
        let response = await fetch("/upload", {
            method: "POST",
            body: formData
        });

        let result = await response.text();
        message.textContent = result;
    } catch (error) {
        message.textContent = "Lỗi tải lên!";
    }
}