document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.vvhan.com/api/visitor.info'; // 请替换为实际的API端点
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                const visitorContainer = document.getElementById('visitor-container');
                
                // 假设我们有一个天气图标的映射表（这里只是示例，你需要自己实现或找到图标）
                const weatherIcons = {
                    '阴': '⛅', // 阴天
                    '晴': '☀️', // 晴天
                    '多云': '🌥️', // 多云
                    '小雨': '🌦️', // 小雨
                    '中雨': '🌧️', // 中雨
                    '大雨': '🌧️', // 大雨
                    '暴雨': '⛈️', // 暴雨
                    '雷阵雨': '⛈️', // 雷阵雨
                    '雪': '❄️', // 雪
                    '雨夹雪': '🌨️', // 雨夹雪
                    '雾': '🌫️', // 雾
                    '霾': '🌫️', // 霾
                    '风': '💨', // 风
                    '沙尘暴': '🌪️', // 沙尘暴
                    '冰雹': '🌨️', // 冰雹
                    '阵雨': '🌦️', // 阵雨
                    '阵雪': '🌨️', // 阵雪
                    '热': '🔥', // 热
                    '冷': '❄️', // 冷
                    '未知': '❓' // 未知
                };
				const browserIcons = {
					
					
				};
                const lowerCaseBrowser = data.browser.toLowerCase();
                const weatherIcon = weatherIcons[data.tq] || '❓'; // 如果找不到对应的图标，就显示一个问号
                
                let html = `
                    <div class="visitor-info">
                        <div class="visitor-location">${data.location}</div>
                        <div class="visitor-ip">${data.ip}</div>
                        
                        <div>${data.week}</div>
                        <div>浏览器：<i class="fa-brands fa-${lowerCaseBrowser}"></i> ${data.browser}</div>
                        <div>操作系统：${data.system}</div>
                    </div>
                    <div class="weather-info">
                        <div class="weather-icon">${weatherIcon}</div>
                        <div>${data.tq} 温度 ${data.low} - ${data.high}</div>
                        
                    </div>
                `;
                
                visitorContainer.innerHTML = html;
            } else {
                console.error('API 请求未成功。', data);
                document.getElementById('visitor-container').innerHTML = '<p>无法加载数据，请稍后再试。</p>';
            }
        })
        .catch(function(error) {
            console.error('Fetch error:', error);
            document.getElementById('visitor-container').innerHTML = '<p>无法加载数据，请检查网络连接。</p>';
        });
});