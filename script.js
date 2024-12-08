function changeLanguage() {
    var language = document.getElementById('language-select').value;

    if(language === 'tr') {
        document.getElementById('gizliler').textContent = "Eski Gizli Coverlar (kimseye söyleme)";
        document.getElementById('yazi1').textContent = "Bu siteyle uzun zamandır ilgilenmiyordum, bugün 28 Temmuz 2024 çoğu şeyi silmeye ve değiştirmeye geldim :33";
        document.getElementById('yazi2').textContent = "Sitede şimdilik sadece 4 tane hesabımın bağlantısı var, bir gün başka şeyler ekler miyim bilmiyorum.";
    } else if(language === 'en') {
        document.getElementById('gizliler').textContent = "Old Secret Covers (don't tell anyone)";
        document.getElementById('yazi1').textContent = "I haven't been cared in this site for a long time, today, July 28, 2024, I came to delete and change most things :33";
        document.getElementById('yazi2').textContent = "There is currently links of my 4 accounts on this site, I don't know will I add something someday.";
    } else if(language === 'jp') {
        document.getElementById('gizliler').textContent = "古い秘密の歌";
        document.getElementById('yazi1').textContent = "長い間このサイトにお世話になっていなかったのですが、今日、2024年7月28日、ほとんどのものを削除して変更することにしました :33";
        document.getElementById('yazi2').textContent = "今のところ、このサイトでは私のアカウントへのリンクが4ありますが、いつか他のものを追加するかどうかはわかりません。";
    }
}
