function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active')); a
    document.getElementById(id).classList.add('active');
}

function fun() {
            alert ("Sorry, this website is currently under development");
        }
        
function hitungTotal() {
    const rows = document.querySelectorAll('tbody tr');
    let totalKeseluruhan = 0;

    rows.forEach(row => {
        const jumlah = parseInt(row.querySelector('.jmlh').textContent);
        const harga = parseInt(row.querySelector('.Harga').textContent.replace(/\./g, ''));
        const totalPerRow = jumlah * harga;

        const totalCell = row.querySelector('td:last-child');
        if (totalCell) {
            totalCell.textContent = 'Rp' + totalPerRow.toLocaleString('id-ID');
        }

        totalKeseluruhan += totalPerRow;
    });

    document.getElementById('total').textContent =
        'Rp' + totalKeseluruhan.toLocaleString('id-ID');
}
hitungTotal();

