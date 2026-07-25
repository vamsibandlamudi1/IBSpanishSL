const fs = require('fs');
const path = require('path');
const https = require('https');

const photoMap = [
    {
        id: "social-organization-relationships",
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "social-organization-education",
        url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "social-organization-employment",
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "social-organization-community",
        url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "social-organization-law",
        url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "human-ingenuity-communication",
        url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "human-ingenuity-technology",
        url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "human-ingenuity-transport",
        url: "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "sharing-planet-environment",
        url: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "sharing-planet-human-rights",
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "sharing-planet-globalization",
        url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "sharing-planet-consumption",
        url: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=1200&auto=format&fit=crop"
    }
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'oral');

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return download(response.headers.location, dest).then(resolve).catch(reject);
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function run() {
    for (const item of photoMap) {
        const dest = path.join(targetDir, `${item.id}.jpg`);
        console.log(`Downloading real photograph for ${item.id}...`);
        try {
            await download(item.url, dest);
            console.log(`Saved: ${dest}`);
        } catch (e) {
            console.error(`Failed to download ${item.id}:`, e);
        }
    }
    console.log('All real photos downloaded successfully!');
}

run();
