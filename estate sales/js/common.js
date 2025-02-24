function search() {
    const query = document.getElementById("search").value;
    if (query) {
        alert(`검색 실행: ${query}`);
    } else {
        alert("검색어를 입력하세요.");
    }
}