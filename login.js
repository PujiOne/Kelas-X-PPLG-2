document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    var validUsers = {
        'ABDUL MUGHNI NUGRAHA': 'absen1',
        'AHMAD FATHAN ARROYYAN': 'absen2',
        'AMELIA AGUSTIN': 'absen3',
        'AMMAR NUR FAISHOL': 'absen4',
        'ARYA MILITO': 'absen5',
        'ATHALLAH ASYARIF KHOIRULINSAN': 'absen6',
        'CHIARA DEWI CHATLINA': 'absen7',
        'DIYANA PUTRI RAMADAN': 'absen8',
        'FATHAN APRIAN': 'absen9',
        'FERDY PRATAMA SURADI': 'absen10',
        'INDAH NURAISYAH': 'absen11',
        'JIHAN RIESTY APRILLIA': 'absen12',
        'JIHAN SYAHIRA': 'absen13',
        'KAYNDRA NUR FAIQ': 'absen14',
        'MELANI DETIANI': 'absen15',
        'MELINA DETIANA': 'absen16',
        'MOCHAMAD BINTANG LAKSAMANA SUMARDI': 'absen17',
        'MUHAMMAD RIDHO OKTOBERYL NUGRAHA': 'absen18',
        'MUHAIMIN': 'absen19',
        'NAFISAH ADELIA PUTRI': 'absen20',
        'NINO ADITYO NUGROHO': 'absen21',
        'NOVAL MAULANA': 'absen22',
        'NOVVALINO PUTRA GIANTO': 'absen23',
        'NUR FAJRINA RAMADANI': 'absen24',
        'OKTA PUTRI SYLLAWATI HASSAN': 'absen25',
        'PRIMA AL RASYID IRAWAN': 'absen26',
        'PUJI WIJAYANTO': 'absen27',
        'RADHITYA RIZKI RAMADHAN': 'absen28',
        'SAEFUDIN PUTRA MAGHFIROHTI': 'absen29',
        'SARIF HIDAYAT': 'absen30',
        'SINDI MAULIDIYA': 'absen31',
        'SYAFA INESYA': 'absen32',
        'SYILLA MULYA RAMADHANI': 'absen33',
        'TIARA AFPACILA': 'absen34',
        'VETRI PUTRI RANTIKA': 'absen35'
    };

    if (validUsers[username] && validUsers[username] === password) {
        window.location.href = 'website-kelas.html';
    } else {
        alert('Invalid username or password');
    }
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordType);
}
