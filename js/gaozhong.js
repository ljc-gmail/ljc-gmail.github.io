const ap = new APlayer({
    container: document.getElementById('player'),
	lrcType: 3,
    audio: [
		{
            name: "(Chill)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/(Chill).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/(Don't Go)_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/(Chill).lrc"
        },
        {
            name: "(Diamond)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/(Diamond).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/(Don't Go)_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/(Diamond).lrc"
        },
        {
            name: "(Don't Go)_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/(Don't Go)_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/(Don't Go)_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/(Don't Go)_EXO.lrc"
        },
		{
            name: "02.鹿晗 - 零界点（On fire）",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/02.鹿晗 - 零界点（On fire）.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/02.鹿晗 - 零界点（On fire）.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/02.鹿晗 - 零界点（On fire）.lrc"
        },
        {
            name: "03. Love You More",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/03. Love You More.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/03. Love You More.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/03. Love You More.lrc"
        },
		 {
            name: "03. TONIGHT",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/03. TONIGHT.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/03. TONIGHT.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/03. TONIGHT.lrc"
        },
        {
            name: "04. MYM",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/04. MYM.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/04. MYM.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/04. MYM.lrc"
        },
        {
            name: "05. Good Luck",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/05. Good Luck.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/05. Good Luck.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/05. Good Luck.lrc"
        },
        {
            name: "06.  埋怨",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/06.  埋怨.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/06.  埋怨.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/06.  埋怨.lrc"
        },
        {
            name: "06. RELAX (守望)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/06. RELAX (守望).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/06. RELAX (守望).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/06. RELAX (守望).lrc"
        },
        {
            name: "08. Breathing",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/08. Breathing.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/08. Breathing.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/08. Breathing.lrc"
        },
        {
            name: "09. All That Glitters",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/09. All That Glitters.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/09. All That Glitters.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/09. All That Glitters.lrc"
        },
        {
            name: "10.  即使再見，即使會再見",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/10.  即使再見，即使會再見.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/10.  即使再見，即使會再見.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/10.  即使再見，即使會再見.lrc"
        },
        {
            name: "12. Run Away",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/12. Run Away.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/12. Run Away.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/12. Run Away.lrc"
        },
        {
            name: "3.6.5 (Chinese ver.)_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/3.6.5 (Chinese ver.)_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/3.6.5 (Chinese ver.)_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/3.6.5 (Chinese ver.)_EXO.lrc"
        },
        {
            name: "4 Walls_f(x)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/4 Walls_f(x).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/4 Walls_f(x).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/4 Walls_f(x).lrc"
        },
        {
            name: "5.EXO-CBX-Cherish",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/5.EXO-CBX-Cherish.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/5.EXO-CBX-Cherish.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/5.EXO-CBX-Cherish.lrc"
        },
        {
            name: "A Bitter Day-金炫雅",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/A Bitter Day-金炫雅.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/A Bitter Day-金炫雅.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/A Bitter Day-金炫雅.lrc"
        },
        {
            name: "A-oh!_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/A-oh!_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/A-oh!_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/A-oh!_Super Junior-M.lrc"
        },
        {
            name: "Alan Walker - Faded",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Alan Walker - Faded.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Alan Walker - Faded.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Alan Walker - Faded.lrc"
        },
        {
            name: "ALL IS IN U_Beast",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/ALL IS IN U_Beast.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/ALL IS IN U_Beast.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/ALL IS IN U_Beast.lrc"
        },
        {
            name: "All Mine_f(x)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/All Mine_f(x).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/All Mine_f(x).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/All Mine_f(x).lrc"
        },
        {
            name: "Artificial Love (Chinese Ver.)_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Artificial Love (Chinese Ver.)_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Artificial Love (Chinese Ver.)_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Artificial Love (Chinese Ver.)_EXO.lrc"
        },
        {
            name: "Baby, Don't Cry (人鱼的眼泪)_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Baby, Don't Cry (人鱼的眼泪)_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Baby, Don't Cry (人鱼的眼泪)_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Baby, Don't Cry (人鱼的眼泪)_EXO.lrc"
        },
        {
            name: "Baby, Don't Cry _EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Baby, Don't Cry _EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Baby, Don't Cry _EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Baby, Don't Cry _EXO.lrc"
        },
        {
            name: "BACK SEAT - JYJ",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/BACK SEAT - JYJ.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/BACK SEAT - JYJ.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/BACK SEAT - JYJ.lrc"
        },
        {
            name: "Back_Infinite",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Back_Infinite.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Back_Infinite.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Back_Infinite.lrc"
        },
        {
            name: "Balloons_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Balloons_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Balloons_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Balloons_东方神起.lrc"
        },
        {
            name: "Beast - Break Down",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Beast - Break Down.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Beast - Break Down.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Beast - Break Down.lrc"
        },
        {
            name: "Beast - Fiction",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Beast - Fiction.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Beast - Fiction.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Beast - Fiction.lrc"
        },
        {
            name: "Beast - Shadow(影子)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Beast - Shadow(影子).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Beast - Shadow(影子).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Beast - Shadow(影子).lrc"
        },
        {
            name: "Beast - 美丽的夜晚",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Beast - 美丽的夜晚.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Beast - 美丽的夜晚.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Beast - 美丽的夜晚.lrc"
        },
        {
            name: "Beautiful Life_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Beautiful Life_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Beautiful Life_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Beautiful Life_东方神起.lrc"
        },
        {
            name: "Blacksuit_superjunior",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Blacksuit_superjunior.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Blacksuit_superjunior.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Blacksuit_superjunior.lrc"
        },
        {
            name: "Boyfriend_Justin Bieber",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Boyfriend_Justin Bieber.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Boyfriend_Justin Bieber.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Boyfriend_Justin Bieber.lrc"
        },
        {
            name: "Break Down_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Break Down_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Break Down_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Break Down_Super Junior-M.lrc"
        },
        {
            name: "Britney Spears - Lucky",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Britney Spears - Lucky.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Britney Spears - Lucky.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Britney Spears - Lucky.lrc"
        },
        {
            name: "Butterfly_金在中",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Butterfly_金在中.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Butterfly_金在中.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Butterfly_金在中.lrc"
        },
        {
            name: "Butterfly_防弹少年团",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Butterfly_防弹少年团.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Butterfly_防弹少年团.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Butterfly_防弹少年团.lrc"
        },
        {
            name: "CALL ME BABY_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/CALL ME BABY_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/CALL ME BABY_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/CALL ME BABY_EXO.lrc"
        },
        {
            name: "Call Me Maybe_Carly Rae Jepsen",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Call Me Maybe_Carly Rae Jepsen.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Call Me Maybe_Carly Rae Jepsen.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Call Me Maybe_Carly Rae Jepsen.lrc"
        },
        {
            name: "Can't say_VIXX",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Can't say_VIXX.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Can't say_VIXX.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Can't say_VIXX.lrc"
        },
        {
            name: "Catch Me If You Can_少女时代",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Catch Me If You Can_少女时代.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Catch Me If You Can_少女时代.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Catch Me If You Can_少女时代.lrc"
        },
        {
            name: "Catch Me_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Catch Me_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Catch Me_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Catch Me_东方神起.lrc"
        },
        {
            name: "Celebrate (English Ver.)_Jessica",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Celebrate (English Ver.)_Jessica.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Celebrate (English Ver.)_Jessica.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Celebrate (English Ver.)_Jessica.lrc"
        },
        {
            name: "Chandelier_Sia",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Chandelier_Sia.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Chandelier_Sia.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Chandelier_Sia.lrc"
        },
        {
            name: "Chewing Gum_NCT DREAM",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Chewing Gum_NCT DREAM.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Chewing Gum_NCT DREAM.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Chewing Gum_NCT DREAM.lrc"
        },
        {
            name: "Christmas Day_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Christmas Day_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Christmas Day_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Christmas Day_EXO.lrc"
        },
        {
            name: "Crazy Love-东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Crazy Love-东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Crazy Love-东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Crazy Love-东方神起.lrc"
        },
        {
            name: "Crush U_EXO-CBX",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Crush U_EXO-CBX.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Crush U_EXO-CBX.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Crush U_EXO-CBX.lrc"
        },
        {
            name: "December, 2014 (The Winter's T_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/December, 2014 (The Winter's T_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/December, 2014 (The Winter's T_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/December, 2014 (The Winter's T_EXO.lrc"
        },
        {
            name: "Devil_Super Junior",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Devil_Super Junior.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Devil_Super Junior.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Devil_Super Junior.lrc"
        },
        {
            name: "DJ Got Us Falling In Love _RichGirl",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/DJ Got Us Falling In Love _RichGirl.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/DJ Got Us Falling In Love _RichGirl.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/DJ Got Us Falling In Love _RichGirl.lrc"
        },
        {
            name: "Don't Don_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Don't Don_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Don't Don_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Don't Don_Super Junior-M.lrc"
        },
        {
            name: "EL DORADO_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EL DORADO_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EL DORADO_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EL DORADO_EXO.lrc"
        },
        {
            name: "Electric Shock_f(x)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Electric Shock_f(x).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Electric Shock_f(x).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Electric Shock_f(x).lrc"
        },
        {
            name: "Empty_JYJ",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Empty_JYJ.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Empty_JYJ.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Empty_JYJ.lrc"
        },
        {
            name: "Error_VIXX",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Error_VIXX.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Error_VIXX.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Error_VIXX.lrc"
        },
        {
            name: "Everybody_SHINee",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Everybody_SHINee.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Everybody_SHINee.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Everybody_SHINee.lrc"
        },
        {
            name: "EXID-L.I.E",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXID-L.I.E.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXID-L.I.E.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXID-L.I.E.lrc"
        },
        {
            name: "EXO - Coming Over",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXO - Coming Over.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXO - Coming Over.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXO - Coming Over.lrc"
        },
        {
            name: "EXO - Run This",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXO - Run This.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXO - Run This.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXO - Run This.lrc"
        },
        {
            name: "EXO - TacTix",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXO - TacTix.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXO - TacTix.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXO - TacTix.lrc"
        },
        {
            name: "EXO-CBX - Diamond Crystal",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Diamond Crystal.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Diamond Crystal.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Diamond Crystal.lrc"
        },
        {
            name: "EXO-CBX - Girl Problems",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Girl Problems.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Girl Problems.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Girl Problems.lrc"
        },
        {
            name: "EXO-CBX - Ka-CHING!",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Ka-CHING!.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Ka-CHING!.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Ka-CHING!.lrc"
        },
        {
            name: "EXO-CBX - KING and QUEEN",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - KING and QUEEN.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - KING and QUEEN.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - KING and QUEEN.lrc"
        },
        {
            name: "EXO-CBX - Miss You",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Miss You.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Miss You.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Miss You.lrc"
        },
        {
            name: "EXO-CBX - Tornado Spiral",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Tornado Spiral.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Tornado Spiral.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/EXO-CBX - Tornado Spiral.lrc"
        },
        {
            name: "Flower Lady-东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Flower Lady-东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Flower Lady-东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Flower Lady-东方神起.lrc"
        },
        {
            name: "Forever",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Forever.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Forever.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Forever.lrc"
        },
        {
            name: "Freaking Cute_Beast",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Freaking Cute_Beast.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Freaking Cute_Beast.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Freaking Cute_Beast.lrc"
        },
        {
            name: "Get Out_JYJ",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Get Out_JYJ.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Get Out_JYJ.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Get Out_JYJ.lrc"
        },
        {
            name: "Giulia - Ce Frumoasa E Iubirea",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Giulia - Ce Frumoasa E Iubirea.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Giulia - Ce Frumoasa E Iubirea.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Giulia - Ce Frumoasa E Iubirea.lrc"
        },
        {
            name: "Good Luck_Beast",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Good Luck_Beast.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Good Luck_Beast.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Good Luck_Beast.lrc"
        },
        {
            name: "Goodbye Summer_f(x)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Goodbye Summer_f(x).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Goodbye Summer_f(x).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Goodbye Summer_f(x).lrc"
        },
        {
            name: "Goodbye_Christmas(Eng_Ver_)-张艺兴",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Goodbye_Christmas(Eng_Ver_)-张艺兴.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Goodbye_Christmas(Eng_Ver_)-张艺兴.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Goodbye_Christmas(Eng_Ver_)-张艺兴.lrc"
        },
        {
            name: "Gorgeous_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Gorgeous_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Gorgeous_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Gorgeous_东方神起.lrc"
        },
        {
            name: "GOT7 - hard carry",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/GOT7 - hard carry.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/GOT7 - hard carry.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/GOT7 - hard carry.lrc"
        },
        {
            name: "Gotan Project - Queremos Paz",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Gotan Project - Queremos Paz.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Gotan Project - Queremos Paz.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Gotan Project - Queremos Paz.lrc"
        },
        {
            name: "Go_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Go_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Go_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Go_Super Junior-M.lrc"
        },
        {
            name: "Groove Coverage - Far Away from Home",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Groove Coverage - Far Away from Home.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Groove Coverage - Far Away from Home.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Groove Coverage - Far Away from Home.lrc"
        },
        {
            name: "Groove Coverage - She",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Groove Coverage - She.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Groove Coverage - She.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Groove Coverage - She.lrc"
        },
        {
            name: "Growl_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Growl_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Growl_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Growl_EXO.lrc"
        },
        {
            name: "HANDS UP_Beast",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/HANDS UP_Beast.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/HANDS UP_Beast.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/HANDS UP_Beast.lrc"
        },
        {
            name: "Heart Attack-EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Heart Attack-EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Heart Attack-EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Heart Attack-EXO.lrc"
        },
        {
            name: "Heartbeat (English Ver.)_LUNA",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Heartbeat (English Ver.)_LUNA.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Heartbeat (English Ver.)_LUNA.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Heartbeat (English Ver.)_LUNA.lrc"
        },
        {
            name: "Heartbreaker-Justin Bieber",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Heartbreaker-Justin Bieber.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Heartbreaker-Justin Bieber.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Heartbreaker-Justin Bieber.lrc"
        },
        {
            name: "Hey! (Don'T Bring Me Down)-东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Hey! (Don'T Bring Me Down)-东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Hey! (Don'T Bring Me Down)-东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Hey! (Don'T Bring Me Down)-东方神起.lrc"
        },
        {
            name: "History_EXO-K",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/History_EXO-K.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/History_EXO-K.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/History_EXO-K.lrc"
        },
        {
            name: "Hug _东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Hug _东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Hug _东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Hug _东方神起.lrc"
        },
        {
            name: "Humanoids_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Humanoids_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Humanoids_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Humanoids_东方神起.lrc"
        },
        {
            name: "I Got A Boy_少女时代",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/I Got A Boy_少女时代.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/I Got A Boy_少女时代.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/I Got A Boy_少女时代.lrc"
        },
        {
            name: "I NEED U_防弹少年团",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/I NEED U_防弹少年团.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/I NEED U_防弹少年团.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/I NEED U_防弹少年团.lrc"
        },
        {
            name: "I Swear-东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/I Swear-东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/I Swear-东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/I Swear-东方神起.lrc"
        },
        {
            name: "I Wanna Hold You_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/I Wanna Hold You_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/I Wanna Hold You_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/I Wanna Hold You_东方神起.lrc"
        },
        {
            name: "In Heaven _JYJ",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/In Heaven _JYJ.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/In Heaven _JYJ.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/In Heaven _JYJ.lrc"
        },
        {
            name: "Juice-吴亦凡",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Juice-吴亦凡.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Juice-吴亦凡.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Juice-吴亦凡.lrc"
        },
        {
            name: "JULY",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/JULY.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/JULY.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/JULY.lrc"
        },
        {
            name: "Just Another Girl  _金在中",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Just Another Girl  _金在中.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Just Another Girl  _金在中.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Just Another Girl  _金在中.lrc"
        },
        {
            name: "Katy Perry - Roar",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Katy Perry - Roar.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Katy Perry - Roar.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Katy Perry - Roar.lrc"
        },
        {
            name: "kelly clarkson - because of you",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/kelly clarkson - because of you.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/kelly clarkson - because of you.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/kelly clarkson - because of you.lrc"
        },
        {
            name: "Key、Amber、吴亦凡 - Like A G6",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Key、Amber、吴亦凡 - Like A G6.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Key、Amber、吴亦凡 - Like A G6.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Key、Amber、吴亦凡 - Like A G6.lrc"
        },
        {
            name: "Kiss B_金在中",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Kiss B_金在中.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Kiss B_金在中.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Kiss B_金在中.lrc"
        },
        {
            name: "Ko Ko Bop",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Ko Ko Bop.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Ko Ko Bop.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Ko Ko Bop.lrc"
        },
        {
            name: "Lady Gaga - Bad Romance",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Lady Gaga - Bad Romance.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Lady Gaga - Bad Romance.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Lady Gaga - Bad Romance.lrc"
        },
        {
            name: "Lady GaGa - Just Dance(Main)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Lady GaGa - Just Dance(Main).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Lady GaGa - Just Dance(Main).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Lady GaGa - Just Dance(Main).lrc"
        },
        {
            name: "Lady Gaga - Poker Face",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Lady Gaga - Poker Face.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Lady Gaga - Poker Face.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Lady Gaga - Poker Face.lrc"
        },
        {
            name: "Lady Gaga、Beyonce - Telephone",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Lady Gaga、Beyonce - Telephone.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Lady Gaga、Beyonce - Telephone.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Lady Gaga、Beyonce - Telephone.lrc"
        },
        {
            name: "Let Out The Beast_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Let Out The Beast_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Let Out The Beast_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Let Out The Beast_EXO.lrc"
        },
        {
            name: "Let The Rhythm Flow_金在中",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Let The Rhythm Flow_金在中.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Let The Rhythm Flow_金在中.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Let The Rhythm Flow_金在中.lrc"
        },
        {
            name: "Lie -Korean Version-_BIGBANG",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Lie -Korean Version-_BIGBANG.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Lie -Korean Version-_BIGBANG.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Lie -Korean Version-_BIGBANG.lrc"
        },
        {
            name: "Lion Heart_少女时代",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Lion Heart_少女时代.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Lion Heart_少女时代.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Lion Heart_少女时代.lrc"
        },
        {
            name: "Lotto (Chinese Ver.)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Lotto (Chinese Ver.).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Lotto (Chinese Ver.).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Lotto (Chinese Ver.).lrc"
        },
        {
            name: "Love In The Ice-东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Love In The Ice-东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Love In The Ice-东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Love In The Ice-东方神起.lrc"
        },
        {
            name: "LOVE ME RIGHT_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/LOVE ME RIGHT_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/LOVE ME RIGHT_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/LOVE ME RIGHT_EXO.lrc"
        },
        {
            name: "Love Yourself_Justin Bieber",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Love Yourself_Justin Bieber.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Love Yourself_Justin Bieber.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Love Yourself_Justin Bieber.lrc"
        },
        {
            name: "Lucky-EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Lucky-EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Lucky-EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Lucky-EXO.lrc"
        },
        {
            name: "Luvholic_金在中",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Luvholic_金在中.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Luvholic_金在中.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Luvholic_金在中.lrc"
        },
        {
            name: "Magic_Super Junior",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Magic_Super Junior.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Magic_Super Junior.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Magic_Super Junior.lrc"
        },
        {
            name: "MAMA_EXO-K",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/MAMA_EXO-K.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/MAMA_EXO-K.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/MAMA_EXO-K.lrc"
        },
        {
            name: "Maps_Maroon 5",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Maps_Maroon 5.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Maps_Maroon 5.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Maps_Maroon 5.lrc"
        },
        {
            name: "Maroon 5 - Animals",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Maroon 5 - Animals.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Maroon 5 - Animals.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Maroon 5 - Animals.lrc"
        },
        {
            name: "Maroon 5、Wiz Khalifa - Payphone",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Maroon 5、Wiz Khalifa - Payphone.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Maroon 5、Wiz Khalifa - Payphone.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Maroon 5、Wiz Khalifa - Payphone.lrc"
        },
        {
            name: "Maxstep_Younique Unit",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Maxstep_Younique Unit.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Maxstep_Younique Unit.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Maxstep_Younique Unit.lrc"
        },
        {
            name: "MC梦 - 死一样的痛过",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/MC梦 - 死一样的痛过.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/MC梦 - 死一样的痛过.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/MC梦 - 死一样的痛过.lrc"
        },
        {
            name: "Midnight -星を数える夜- (Japanese Ve_Beast",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Midnight -星を数える夜- (Japanese Ve_Beast.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Midnight -星を数える夜- (Japanese Ve_Beast.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Midnight -星を数える夜- (Japanese Ve_Beast.lrc"
        },
        {
            name: "Mine_金在中",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Mine_金在中.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Mine_金在中.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Mine_金在中.lrc"
        },
        {
            name: "MIROTIC (Original Ver.)_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/MIROTIC (Original Ver.)_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/MIROTIC (Original Ver.)_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/MIROTIC (Original Ver.)_东方神起.lrc"
        },
        {
            name: "Mission_JYJ",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Mission_JYJ.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Mission_JYJ.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Mission_JYJ.lrc"
        },
        {
            name: "Mr. Simple_Super Junior",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Mr. Simple_Super Junior.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Mr. Simple_Super Junior.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Mr. Simple_Super Junior.lrc"
        },
        {
            name: "MY ANSWER_EXO(1)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/MY ANSWER_EXO(1).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/MY ANSWER_EXO(1).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/MY ANSWER_EXO(1).lrc"
        },
        {
            name: "MY ANSWER_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/MY ANSWER_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/MY ANSWER_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/MY ANSWER_EXO.lrc"
        },
        {
            name: "My Show(1)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/My Show(1).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/My Show(1).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/My Show(1).lrc"
        },
        {
            name: "My Show",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/My Show.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/My Show.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/My Show.lrc"
        },
        {
            name: "My Turn To Cry_EXO(1)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/My Turn To Cry_EXO(1).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/My Turn To Cry_EXO(1).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/My Turn To Cry_EXO(1).lrc"
        },
        {
            name: "My Turn To Cry_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/My Turn To Cry_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/My Turn To Cry_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/My Turn To Cry_EXO.lrc"
        },
        {
            name: "Mystery Girl_黄子韬",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Mystery Girl_黄子韬.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Mystery Girl_黄子韬.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Mystery Girl_黄子韬.lrc"
        },
        {
            name: "Never Say Never_Justin Bieber",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Never Say Never_Justin Bieber.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Never Say Never_Justin Bieber.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Never Say Never_Justin Bieber.lrc"
        },
        {
            name: "New day - 黄子韬-10000",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/New day - 黄子韬-10000.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/New day - 黄子韬-10000.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/New day - 黄子韬-10000.lrc"
        },
        {
            name: "New_Romantics",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/New_Romantics.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/New_Romantics.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/New_Romantics.lrc"
        },
        {
            name: "Nu _f(x)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Nu _f(x).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Nu _f(x).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Nu _f(x).lrc"
        },
        {
            name: "O-正.反.合._东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/O-正.反.合._东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/O-正.反.合._东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/O-正.反.合._东方神起.lrc"
        },
        {
            name: "Off-Road_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Off-Road_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Off-Road_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Off-Road_东方神起.lrc"
        },
        {
            name: "One Direction - What Makes You Beautiful",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/One Direction - What Makes You Beautiful.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/One Direction - What Makes You Beautiful.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/One Direction - What Makes You Beautiful.lrc"
        },
        {
            name: "One Dream_BoA",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/One Dream_BoA.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/One Dream_BoA.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/One Dream_BoA.lrc"
        },
        {
            name: "One Kiss_金在中",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/One Kiss_金在中.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/One Kiss_金在中.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/One Kiss_金在中.lrc"
        },
        {
            name: "palette_IU",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/palette_IU.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/palette_IU.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/palette_IU.lrc"
        },
        {
            name: "Paradise_GOT7",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Paradise_GOT7.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Paradise_GOT7.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Paradise_GOT7.lrc"
        },
        {
            name: "Paradise_NCT 127",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Paradise_NCT 127.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Paradise_NCT 127.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Paradise_NCT 127.lrc"
        },
        {
            name: "Power_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Power_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Power_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Power_EXO.lrc"
        },
        {
            name: "Rise As One (Sung By Max)_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Rise As One (Sung By Max)_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Rise As One (Sung By Max)_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Rise As One (Sung By Max)_东方神起.lrc"
        },
        {
            name: "Rotten Love _金在中",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Rotten Love _金在中.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Rotten Love _金在中.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Rotten Love _金在中.lrc"
        },
        {
            name: "RUN_防弹少年团",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/RUN_防弹少年团.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/RUN_防弹少年团.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/RUN_防弹少年团.lrc"
        },
        {
            name: "Say Yes_韩国原声带",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Say Yes_韩国原声带.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Say Yes_韩国原声带.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Say Yes_韩国原声带.lrc"
        },
        {
            name: "Shape Of You_Various Artists",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Shape Of You_Various Artists.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Shape Of You_Various Artists.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Shape Of You_Various Artists.lrc"
        },
        {
            name: "Shine Forever_Monsta X",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Shine Forever_Monsta X.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Shine Forever_Monsta X.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Shine Forever_Monsta X.lrc"
        },
        {
            name: "SHINee - Lucifer - 日文版",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/SHINee - Lucifer - 日文版.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/SHINee - Lucifer - 日文版.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/SHINee - Lucifer - 日文版.lrc"
        },
        {
            name: "Show Me Your Love_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Show Me Your Love_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Show Me Your Love_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Show Me Your Love_东方神起.lrc"
        },
        {
            name: "Something_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Something_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Something_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Something_东方神起.lrc"
        },
        {
            name: "SORRY, SORRY_Super Junior",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/SORRY, SORRY_Super Junior.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/SORRY, SORRY_Super Junior.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/SORRY, SORRY_Super Junior.lrc"
        },
        {
            name: "Sorry_Justin Bieber",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Sorry_Justin Bieber.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Sorry_Justin Bieber.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Sorry_Justin Bieber.lrc"
        },
        {
            name: "Spectrum_SMTOWN",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Spectrum_SMTOWN.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Spectrum_SMTOWN.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Spectrum_SMTOWN.lrc"
        },
        {
            name: "Stronger (What Doesn't Kill Yo_Kelly Clarkson",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Stronger (What Doesn't Kill Yo_Kelly Clarkson.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Stronger (What Doesn't Kill Yo_Kelly Clarkson.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Stronger (What Doesn't Kill Yo_Kelly Clarkson.lrc"
        },
        {
            name: "Sun & Moon_NCT 127",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Sun & Moon_NCT 127.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Sun & Moon_NCT 127.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Sun & Moon_NCT 127.lrc"
        },
        {
            name: "Super Girl_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Super Girl_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Super Girl_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Super Girl_Super Junior-M.lrc"
        },
        {
            name: "Super Star_S.H.E",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Super Star_S.H.E.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Super Star_S.H.E.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Super Star_S.H.E.lrc"
        },
        {
            name: "Superstar_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Superstar_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Superstar_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Superstar_东方神起.lrc"
        },
        {
            name: "Swing (Chinese ver.)_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Swing (Chinese ver.)_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Swing (Chinese ver.)_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Swing (Chinese ver.)_Super Junior-M.lrc"
        },
        {
            name: "TENDER LOVE_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/TENDER LOVE_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/TENDER LOVE_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/TENDER LOVE_EXO.lrc"
        },
        {
            name: "The Day_K.Will",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/The Day_K.Will.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/The Day_K.Will.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/The Day_K.Will.lrc"
        },
        {
            name: "The Monster_Eminem",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/The Monster_Eminem.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/The Monster_Eminem.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/The Monster_Eminem.lrc"
        },
        {
            name: "Tik Tok_Kesha",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Tik Tok_Kesha.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Tik Tok_Kesha.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Tik Tok_Kesha.lrc"
        },
        {
            name: "Trap_Henry",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Trap_Henry.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Trap_Henry.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Trap_Henry.lrc"
        },
        {
            name: "Venus_神话",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Venus_神话.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Venus_神话.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Venus_神话.lrc"
        },
        {
            name: "View_SHINee",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/View_SHINee.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/View_SHINee.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/View_SHINee.lrc"
        },
        {
            name: "WAKE ME TONIGHT_JYJ",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/WAKE ME TONIGHT_JYJ.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/WAKE ME TONIGHT_JYJ.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/WAKE ME TONIGHT_JYJ.lrc"
        },
        {
            name: "What Do You Mean-_Justin Bieber",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/What Do You Mean-_Justin Bieber.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/What Do You Mean-_Justin Bieber.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/What Do You Mean-_Justin Bieber.lrc"
        },
        {
            name: "What U do_",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/What U do_.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/What U do_.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/What U do_.lrc"
        },
        {
            name: "Whole Lotta Lovin_Beast",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Whole Lotta Lovin_Beast.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Whole Lotta Lovin_Beast.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Whole Lotta Lovin_Beast.lrc"
        },
        {
            name: "Why (Color-blind)_周觅",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Why (Color-blind)_周觅.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Why (Color-blind)_周觅.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Why (Color-blind)_周觅.lrc"
        },
        {
            name: "WITHOUT YOU_NCT U",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/WITHOUT YOU_NCT U.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/WITHOUT YOU_NCT U.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/WITHOUT YOU_NCT U.lrc"
        },
        {
            name: "Wrong Number-东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/Wrong Number-东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/Wrong Number-东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/Wrong Number-东方神起.lrc"
        },
        {
            name: "XOXO_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/XOXO_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/XOXO_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/XOXO_EXO.lrc"
        },
        {
            name: "一人的寂寞 (Lovesick)(Hong Kong Ver_周觅",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/一人的寂寞 (Lovesick)(Hong Kong Ver_周觅.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/一人的寂寞 (Lovesick)(Hong Kong Ver_周觅.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/一人的寂寞 (Lovesick)(Hong Kong Ver_周觅.lrc"
        },
        {
            name: "一人的寂寞 (Lovesick)_周觅",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/一人的寂寞 (Lovesick)_周觅.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/一人的寂寞 (Lovesick)_周觅.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/一人的寂寞 (Lovesick)_周觅.lrc"
        },
        {
            name: "东方神起 - Rising Sun",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Rising Sun.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Rising Sun.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Rising Sun.lrc"
        },
        {
            name: "东方神起 - Somebody to love",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Somebody to love.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Somebody to love.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Somebody to love.lrc"
        },
        {
            name: "东方神起 - Stay with me tonight",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Stay with me tonight.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Stay with me tonight.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Stay with me tonight.lrc"
        },
        {
            name: "东方神起 - Time Works Wonders",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Time Works Wonders.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Time Works Wonders.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/东方神起 - Time Works Wonders.lrc"
        },
        {
            name: "两个视线, 一个视线_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/两个视线, 一个视线_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/两个视线, 一个视线_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/两个视线, 一个视线_EXO.lrc"
        },
        {
            name: "伤害_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/伤害_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/伤害_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/伤害_EXO.lrc"
        },
        {
            name: "伯贤",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/伯贤.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/伯贤.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/伯贤.lrc"
        },
        {
            name: "你的世界_EXO-K",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/你的世界_EXO-K.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/你的世界_EXO-K.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/你的世界_EXO-K.lrc"
        },
        {
            name: "你的感觉(Can_You_Feel_Me)-张艺兴",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/你的感觉(Can_You_Feel_Me)-张艺兴.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/你的感觉(Can_You_Feel_Me)-张艺兴.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/你的感觉(Can_You_Feel_Me)-张艺兴.lrc"
        },
        {
            name: "偏心_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/偏心_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/偏心_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/偏心_EXO.lrc"
        },
        {
            name: "光剑_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/光剑_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/光剑_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/光剑_EXO.lrc"
        },
        {
            name: "刚好遇见你_李玉刚",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/刚好遇见你_李玉刚.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/刚好遇见你_李玉刚.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/刚好遇见你_李玉刚.lrc"
        },
        {
            name: "到了明天_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/到了明天_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/到了明天_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/到了明天_Super Junior-M.lrc"
        },
        {
            name: "动情_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/动情_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/动情_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/动情_Super Junior-M.lrc"
        },
        {
            name: "勋章-鹿晗",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/勋章-鹿晗.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/勋章-鹿晗.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/勋章-鹿晗.lrc"
        },
        {
            name: "十二月的奇迹_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/十二月的奇迹_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/十二月的奇迹_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/十二月的奇迹_EXO.lrc"
        },
        {
            name: "华丽的独秀_原声带",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/华丽的独秀_原声带.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/华丽的独秀_原声带.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/华丽的独秀_原声带.lrc"
        },
        {
            name: "华晨宇 - 易燃易爆炸",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/华晨宇 - 易燃易爆炸.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/华晨宇 - 易燃易爆炸.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/华晨宇 - 易燃易爆炸.lrc"
        },
        {
            name: "华晨宇 - 烟火里的尘埃",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/华晨宇 - 烟火里的尘埃.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/华晨宇 - 烟火里的尘埃.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/华晨宇 - 烟火里的尘埃.lrc"
        },
        {
            name: "华晨宇 - 齐天大圣",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/华晨宇 - 齐天大圣.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/华晨宇 - 齐天大圣.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/华晨宇 - 齐天大圣.lrc"
        },
        {
            name: "吴亦凡 - 从此以后",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡 - 从此以后.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡 - 从此以后.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡 - 从此以后.lrc"
        },
        {
            name: "吴亦凡,Kevin Shin-Lullaby",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡,Kevin Shin-Lullaby.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡,Kevin Shin-Lullaby.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡,Kevin Shin-Lullaby.lrc"
        },
        {
            name: "吴亦凡-6",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡-6.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡-6.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡-6.lrc"
        },
        {
            name: "吴亦凡-B.M.",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡-B.M..mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡-B.M..jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/吴亦凡-B.M..lrc"
        },
        {
            name: "呼吸 (Breath)_S.M. THE BALLAD",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/呼吸 (Breath)_S.M. THE BALLAD.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/呼吸 (Breath)_S.M. THE BALLAD.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/呼吸 (Breath)_S.M. THE BALLAD.lrc"
        },
        {
            name: "咒文_东方神起",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/咒文_东方神起.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/咒文_东方神起.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/咒文_东方神起.lrc"
        },
        {
            name: "圣诞又至(Goodbye_Christmas)-张艺兴",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/圣诞又至(Goodbye_Christmas)-张艺兴.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/圣诞又至(Goodbye_Christmas)-张艺兴.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/圣诞又至(Goodbye_Christmas)-张艺兴.lrc"
        },
        {
            name: "圣诞的爱(Christmas_Love)-张艺兴",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/圣诞的爱(Christmas_Love)-张艺兴.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/圣诞的爱(Christmas_Love)-张艺兴.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/圣诞的爱(Christmas_Love)-张艺兴.lrc"
        },
        {
            name: "女 x 友_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/女 x 友_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/女 x 友_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/女 x 友_EXO.lrc"
        },
        {
            name: "她说 (Live)_华语群星",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/她说 (Live)_华语群星.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/她说 (Live)_华语群星.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/她说 (Live)_华语群星.lrc"
        },
        {
            name: "孙燕姿 - 遇见",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/孙燕姿 - 遇见.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/孙燕姿 - 遇见.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/孙燕姿 - 遇见.lrc"
        },
        {
            name: "小小礼物(Gift_To_XBACK)-张艺兴",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/小小礼物(Gift_To_XBACK)-张艺兴.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/小小礼物(Gift_To_XBACK)-张艺兴.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/小小礼物(Gift_To_XBACK)-张艺兴.lrc"
        },
        {
            name: "就是爱-EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/就是爱-EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/就是爱-EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/就是爱-EXO.lrc"
        },
        {
            name: "张艺兴-需要你 (I NEED U)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/张艺兴-需要你 (I NEED U).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/张艺兴-需要你 (I NEED U).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/张艺兴-需要你 (I NEED U).lrc"
        },
        {
            name: "张靓颖 - 心电感应808",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/张靓颖 - 心电感应808.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/张靓颖 - 心电感应808.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/张靓颖 - 心电感应808.lrc"
        },
        {
            name: "張靚穎-Tiesto Change Your World",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/張靚穎-Tiesto Change Your World.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/張靚穎-Tiesto Change Your World.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/張靚穎-Tiesto Change Your World.lrc"
        },
        {
            name: "我的答案_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/我的答案_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/我的答案_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/我的答案_EXO.lrc"
        },
        {
            name: "我管你_华晨宇",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/我管你_华晨宇.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/我管你_华晨宇.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/我管你_华晨宇.lrc"
        },
        {
            name: "林宥嘉 - 你是我的眼",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/林宥嘉 - 你是我的眼.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/林宥嘉 - 你是我的眼.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/林宥嘉 - 你是我的眼.lrc"
        },
        {
            name: "林宥嘉 - 突然想起你",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/林宥嘉 - 突然想起你.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/林宥嘉 - 突然想起你.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/林宥嘉 - 突然想起你.lrc"
        },
        {
            name: "林忆莲 - 至少还有你",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/林忆莲 - 至少还有你.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/林忆莲 - 至少还有你.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/林忆莲 - 至少还有你.lrc"
        },
        {
            name: "梦回暮夜 (Walk On Memories)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/梦回暮夜 (Walk On Memories).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/梦回暮夜 (Walk On Memories).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/梦回暮夜 (Walk On Memories).lrc"
        },
        {
            name: "汪苏泷 - 一笑倾城",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/汪苏泷 - 一笑倾城.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/汪苏泷 - 一笑倾城.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/汪苏泷 - 一笑倾城.lrc"
        },
        {
            name: "汪苏泷 - 年轮",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/汪苏泷 - 年轮.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/汪苏泷 - 年轮.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/汪苏泷 - 年轮.lrc"
        },
        {
            name: "深蓝  CNBLUE",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/深蓝  CNBLUE.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/深蓝  CNBLUE.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/深蓝  CNBLUE.lrc"
        },
        {
            name: "爱上你 (Loving You)_周觅",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/爱上你 (Loving You)_周觅.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/爱上你 (Loving You)_周觅.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/爱上你 (Loving You)_周觅.lrc"
        },
        {
            name: "玻璃鱼缸 (One and Only) (Chinese V_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/玻璃鱼缸 (One and Only) (Chinese V_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/玻璃鱼缸 (One and Only) (Chinese V_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/玻璃鱼缸 (One and Only) (Chinese V_EXO.lrc"
        },
        {
            name: "痴心绝对_李圣杰",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/痴心绝对_李圣杰.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/痴心绝对_李圣杰.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/痴心绝对_李圣杰.lrc"
        },
        {
            name: "白色噪音 (White Noise) (Chinese Ve_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/白色噪音 (White Noise) (Chinese Ve_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/白色噪音 (White Noise) (Chinese Ve_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/白色噪音 (White Noise) (Chinese Ve_EXO.lrc"
        },
        {
            name: "神话 - Brand New",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/神话 - Brand New.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/神话 - Brand New.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/神话 - Brand New.lrc"
        },
        {
            name: "神话 - Don't Cry",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/神话 - Don't Cry.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/神话 - Don't Cry.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/神话 - Don't Cry.lrc"
        },
        {
            name: "神话 - MEMORY(1)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/神话 - MEMORY(1).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/神话 - MEMORY(1).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/神话 - MEMORY(1).lrc"
        },
        {
            name: "神话 - MEMORY",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/神话 - MEMORY.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/神话 - MEMORY.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/神话 - MEMORY.lrc"
        },
        {
            name: "神话 - Never Give Up",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/神话 - Never Give Up.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/神话 - Never Give Up.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/神话 - Never Give Up.lrc"
        },
        {
            name: "神话 - This Love(1)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/神话 - This Love(1).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/神话 - This Love(1).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/神话 - This Love(1).lrc"
        },
        {
            name: "神话 - This Love",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/神话 - This Love.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/神话 - This Love.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/神话 - This Love.lrc"
        },
        {
            name: "神话 - 目标(Sniper)",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/神话 - 目标(Sniper).mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/神话 - 目标(Sniper).jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/神话 - 目标(Sniper).lrc"
        },
        {
            name: "第七感 张靓颖",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/第七感 张靓颖.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/第七感 张靓颖.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/第七感 张靓颖.lrc"
        },
        {
            name: "脚印_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/脚印_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/脚印_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/脚印_EXO.lrc"
        },
        {
            name: "至少还有你_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/至少还有你_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/至少还有你_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/至少还有你_Super Junior-M.lrc"
        },
        {
            name: "该死的温柔 (抒情版)_马天宇",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/该死的温柔 (抒情版)_马天宇.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/该死的温柔 (抒情版)_马天宇.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/该死的温柔 (抒情版)_马天宇.lrc"
        },
        {
            name: "贾斯丁比伯 - 永不放弃",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/贾斯丁比伯 - 永不放弃.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/贾斯丁比伯 - 永不放弃.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/贾斯丁比伯 - 永不放弃.lrc"
        },
        {
            name: "逃亡_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/逃亡_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/逃亡_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/逃亡_EXO.lrc"
        },
        {
            name: "那个男孩_原声带",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/那个男孩_原声带.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/那个男孩_原声带.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/那个男孩_原声带.lrc"
        },
        {
            name: "金在中-04. Love You To Death",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/金在中-04. Love You To Death.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/金在中-04. Love You To Death.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/金在中-04. Love You To Death.lrc"
        },
        {
            name: "金在中-You Know What",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/金在中-You Know What.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/金在中-You Know What.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/金在中-You Know What.lrc"
        },
        {
            name: "金在中_Heaven ",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/金在中_Heaven .mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/金在中_Heaven .jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/金在中_Heaven .lrc"
        },
        {
            name: "金志文 - 难以启齿的柔弱",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/金志文 - 难以启齿的柔弱.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/金志文 - 难以启齿的柔弱.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/金志文 - 难以启齿的柔弱.lrc"
        },
        {
            name: "陈奕迅 - 浮夸",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/陈奕迅 - 浮夸.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/陈奕迅 - 浮夸.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/陈奕迅 - 浮夸.lrc"
        },
        {
            name: "飞翔_Super Junior-M",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/飞翔_Super Junior-M.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/飞翔_Super Junior-M.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/飞翔_Super Junior-M.lrc"
        },
        {
            name: "鹿晗 - 原动力",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 原动力.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 原动力.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 原动力.lrc"
        },
        {
            name: "鹿晗 - 我们的明天",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 我们的明天.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 我们的明天.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 我们的明天.lrc"
        },
        {
            name: "鹿晗 - 时差（On call）",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 时差（On call）.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 时差（On call）.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 时差（On call）.lrc"
        },
        {
            name: "鹿晗 - 致爱Your Song",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 致爱Your Song.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 致爱Your Song.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 致爱Your Song.lrc"
        },
        {
            name: "鹿晗 - 让我留在你身边",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 让我留在你身边.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 让我留在你身边.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 让我留在你身边.lrc"
        },
        {
            name: "鹿晗 - 诺言",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 诺言.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 诺言.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 - 诺言.lrc"
        },
        {
            name: "鹿晗 某时某刻",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 某时某刻.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 某时某刻.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/鹿晗 某时某刻.lrc"
        },
        {
            name: "黄子韬 - 舍不得",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/黄子韬 - 舍不得.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/黄子韬 - 舍不得.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/黄子韬 - 舍不得.lrc"
        },
        {
            name: "黄金国_EXO",
            artist: "高中",
            url: "https://raw.githubusercontent.com/we1005/music/main/黄金国_EXO.mp3",
            cover: "https://raw.githubusercontent.com/we1005/music/main/黄金国_EXO.jpg",
            lrc: "https://raw.githubusercontent.com/we1005/music/main/黄金国_EXO.lrc"
        }


    ]
});
