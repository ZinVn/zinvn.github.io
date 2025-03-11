const SUPABASE_URL = "YOUR_SUPABASE_URL";  // Thay bằng Project URL từ Supabase
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY"; // Thay bằng API Key từ Supabase

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const message = document.getElementById("message");

    if (!fileInput.files.length) {
        message.textContent = "Vui lòng chọn file!";
        return;
    }

    const file = fileInput.files[0];
    const filePath = `uploads/${Date.now()}_${file.name}`;

    const { error, data } = await supabase.storage.from("uploads").upload(filePath, file);

    if (error) {
        message.textContent = "Lỗi tải lên!";
    } else {
        const { data: urlData } = supabase.storage.from("uploads").getPublicUrl(filePath);
        message.innerHTML = `Tải lên thành công! <br> <a href="${urlData.publicUrl}" target="_blank">Xem file</a>`;
    }
}