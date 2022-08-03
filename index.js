function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var success = 0;
var failed = 0;
const setTitle = require('node-bash-title');
setTitle('LEAKED | TOKEN GENERATOR | NAYFER#0007 | M1000');
const fs = require('fs');
const { tokens_name , random_name , tokens_password , webhook_use , webhook_url , webhook_name , webhook_profile , compact_style } = require('./config.json');
const {default: axios} = require("axios");
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const { getSystemErrorName } = require('util');

async function main(){
  console.clear()

  'use-scrict';

  const ps = require('prompt-sync')
  const prompt = ps();

  const colors = require('colors');

  console.clear()
  setTitle(`LEAKED | Token Generator | Nayfer#0007 | M1000`);

  console.log(`
\x1b[37m> Leaked By @M1000

\x1B[34m[ \x1b[37m1 \x1B[34m] \x1b[37mGenerate
\x1B[34m[ \x1b[37m2 \x1B[34m] \x1b[37mHelp
\x1B[34m[ \x1b[37m3 \x1B[34m] \x1b[37mEXIT
	`);

  let choice = prompt('\x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mOption?: ')

  if(choice == 1){
    console.clear()
    console.log('LEAKED BY @M1000');
    console.log('');
    console.log('\x1B[34m[ \x1b[37mPick Which Mail You Would Like To Use! \x1B[34m]')
    console.log("\n\x1B[34m[ \x1b[37m1 \x1B[34m] \x1b[37mTemp-Mail");
    console.log("\x1B[34m[ \x1b[37m2 \x1B[34m] \x1b[37m10m-Mail\n");
    let emailchoice = prompt('\x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mOption?: ');
    if(emailchoice > 6){
      console.log('Invaild Command'.red);
      await sleep(1000);
      main()
    }
    console.clear()
    console.log('');
    console.log('LEAKED BY @M1000');
    console.log('\x1B[34m[ \x1b[37mPick from 1 - 100k \x1B[34m]\n')
    console.log('\x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mHow Many Tokens Do You Want To Create?\n');
    let HowTokens = prompt('\x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mOption?: ');
    if (HowTokens == ''){
      HowTokens = 9999;
    }
      console.clear()
      console.log('LEAKED BY @M1000');
      console.log('');
      console.log('\x1B[34m[ \x1b[37mJoiner is Currently Down... Updating Soon! \x1B[34m]\n');
      console.log('\x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37m Do you want to send the tokens to the Server Y/N?:\n');
      let choicewbwile2 = prompt("\x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mOption?: ");
      if (choicewbwile2 == "y") {
        sunucudavet = prompt("\x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mServer Invite Link?: ");
    }
    console.clear();
    setTitle(`LEAKED | TOKEN GENERATOR | NAYFER#0007 | M1000 ( Success ${success}/${HowTokens} | Failed ${failed} )`);
    if(random_name == 'n'){
      console.log(`-        username `+ `: ` + tokens_name);
    } else {
      console.log(`-        Username: random name`);
    }
    console.log(`-        Random Username: Unused`);
    console.log(`-        password `+ `: ` + tokens_password);
    if(webhook_use == 'n'){
      console.log(`-        Webhook log: unused`);
    } else {
      console.log(`-        Webhook log: enabled`);
    }
    if(compact_style == 'n'){
      console.log(`-        Compact Style: Unused`);
      console.log(``);
    } else {
      console.log(`-        Compact style: use`);
      console.log(``);
    }

    const StealthPlugin = require('puppeteer-extra-plugin-stealth')
    const randchars = require("crypto")
    const puppeteer = require('puppeteer-extra')
    const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
    const { uniqueNamesGenerator,  NumberDictionary } = require('unique-names-generator')
    const { PuppeteerBlocker } = require('@cliqz/adblocker-puppeteer')
    const {fetch} = require('cross-fetch')
    const fs = require('fs')
    const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
    


    const cfg = {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--window-position=0,0',
        '--window-size=1366,768',
      ],
      defaultViewport: null,
      ignoreHTTPSErrors: true,
      headless: false,
    }
    const adblocker = AdblockerPlugin({
        blockTrackers: true,
        useCache: true
    })
    puppeteer.use(adblocker)
    puppeteer.use(StealthPlugin())
    puppeteer.use(
      RecaptchaPlugin({
        provider: {
          id: '2captcha',
        },
        visualFeedback: true,
        throwOnError: true
      })
    )

    async function dsne(page, infoname, info){
      const p = await page.$('input[name=' + infoname + ']');
      await p.focus();
      await page.keyboard.type(info);
    }
    async function dsid(page, infoname, info){
      const p = await page.$('input[id=' + infoname + ']');
      await p.focus();
      await page.keyboard.type(JSON.stringify(info));
    }

    async function discordInput(dspagee, username, password, email){
      await dspagee.bringToFront();
      await dspagee.goto('https://discord.com/register', {"waitUntil" : "networkidle0", timeout: 70000});
      
      await dsne(dspagee, "username", username + " | " + Math.floor(Math.random() * 999999999));;
      await dsne(dspagee, "password", password);
      await dsne(dspagee, "email", email);
      sleep(3000);
      await dsid(dspagee, "react-select-2-input", 'May');
      sleep(3000);
      await dsid(dspagee, "react-select-3-input", 1);
      sleep(3000);
      await dsid(dspagee, "react-select-4-input", 2000);
      sleep(3000);
      dspagee.waitForSelector('input[type*=checkbox]').then(() => {
        dspagee.$eval('input[type*=checkbox]', el => el.click());
      }).catch(e => { });

      await dspagee.$eval('button[type=submit]', (el) => el.click());
      if(compact_style == 'n'){
        let today = new Date();

        var hours = ('0' + today.getHours()).slice(-2); 
        var minutes = ('0' + today.getMinutes()).slice(-2);
        var seconds = ('0' + today.getSeconds()).slice(-2); 
  
        var timeString = hours + ':' + minutes  + ':' + seconds;
        console.log(timeString + " - \x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mCaptcha Solving...\033[0m");
      }
    }

    async function captchaby(DiscordPage){
      try {
        await DiscordPage.waitForSelector('[src*=sitekey]');
        await DiscordPage.addScriptTag({content: `hcaptcha.execute()`})
        while(true){
          try{
            await DiscordPage.solveRecaptchas();
            return true;
          } catch(err) {
            sleep(3000);
          }
        }
      } catch(e){
      };
    }
    async function genmail(page2){
      let today = new Date();

      var hours = ('0' + today.getHours()).slice(-2); 
      var minutes = ('0' + today.getMinutes()).slice(-2);
      var seconds = ('0' + today.getSeconds()).slice(-2); 

      var timeString = hours + ':' + minutes  + ':' + seconds;
      console.log(timeString + " - \x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mToken Generate Started\033[0m");
      if(compact_style == 'n'){
        console.log(timeString + " - \x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mEmail Generating...\033[0m");
      }
      if(emailchoice == 1){
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });
        await page2.bringToFront();
        await page2.goto("https://temp-mail.org/", { waitUntil: 'networkidle2', timeout: 0});
        var info_id = "#mail";

        try {
          await page2.waitForSelector(info_id);
          await page2.waitForFunction((info_id) => document.querySelector(info_id).value.indexOf("@") != -1, {}, info_id);
          
          var email = await page2.$eval('#mail', el => el.value);
          return email;
        } catch(e){
          return false;
      }}
      else if(emailchoice == 2){
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("https://10minemail.com/", { waitUntil: 'networkidle2', timeout: 0});
        var info_id = "#mail";

        try {
          await page2.waitForSelector(info_id);
          await page2.waitForFunction((info_id) => document.querySelector(info_id).value.indexOf("@") != -1, {}, info_id);
          
          var email = await page2.$eval('#mail', el => el.value);
          return email;
        } catch(e){
          return false;
      }}
      else if(emailchoice == 3){
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        try {
          var email = Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
          data = {
            "address": `${email}@scpulse.com`,
            "password": Math.random().toString(36).substring(2, 12)
          }
          await axios.post("https://api.mail.tm/accounts", json=data);
          email += "@scpulse.com";
          return email;
        } catch(e){
          return false;
      }}
      else if(emailchoice == 4){
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("https://mail.tm/ko/", { waitUntil: 'networkidle2', timeout: 0});
        var info_id = "#trsh_mail";

        try {
          await page2.waitForSelector(info_id);
          await page2.waitForFunction((info_id) => document.querySelector(info_id).value.indexOf("@") != -1, {}, info_id);
          
          var email = await page2.$eval('#trsh_mail', el => el.value);
          return email;
        } catch(e){
          return false;
      }}
      else if(emailchoice == 5){
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("https://tempmail.dev/en/Gmail", { waitUntil: 'networkidle2', timeout: 10000});
        var info_id = "#current-mail";

        try {     
          await page2.waitForSelector('#current-mail');
          const element = await page2.$("#current-mail");
          const email = await page2.evaluate(element => element.textContent, element);
          return email;
        } catch(e){
          return false;
      }}
  }

    async function emailvery(page2){
      await page2.bringToFront();
      if(compact_style == 'n'){
        let today = new Date();

        var hours = ('0' + today.getHours()).slice(-2); 
        var minutes = ('0' + today.getMinutes()).slice(-2);
        var seconds = ('0' + today.getSeconds()).slice(-2); 
  
        var timeString = hours + ':' + minutes  + ':' + seconds;
        console.log(timeString + " - \x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mEmail Verifying...\033[0m");
      }
      if(emailchoice == 1){
        while(true){
          try {
            await page2.waitForSelector('[title*=Discord]', {timeout: 500});
            await page2.$eval('[title*=Discord]', e => e.parentNode.click());
          
            await page2.waitForSelector("td > a[href*='discord'][style*=background]");
            const elem = await page2.$eval("td > a[href*='discord'][style*=background]", el => el.href);
          
            return elem;
          } catch(e){};
        }
      }else if(emailchoice == 2){
        while(true){
          try {
            await page2.waitForSelector('[title*=Discord]', {timeout: 500});
            await page2.$eval('[title*=Discord]', e => e.parentNode.click());
          
            await page2.waitForSelector("td > a[href*='discord'][style*=background]");
            const elem = await page2.$eval("td > a[href*='discord'][style*=background]", el => el.href);
          
            return elem;
          } catch(e){};
        }
      }else if(emailchoice == 3){
        while(true){
          try {
            await page2.waitForSelector('#inbox-dataList');
            await page2.click('#inbox-dataList');
          
            await page2.waitForSelector("td > a[href*='discord'][style*=background]");
            const elem = await page2.$eval("td > a[href*='discord'][style*=background]", el => el.href);
          
            return elem;
          } catch(e){};
        }
      }
    }

    async function verif2(chrom, link){
      const page = await chrom.newPage();
      await page.goto(link, {"waitUntil" : "networkidle0", "timeout": 60000});
      captchaby(page);
      }

    const numberDictionary = NumberDictionary.generate({ min: 0, max: 99999999, length: 8, });

    async function create_accinfos(chrome, disc) {
      if(random_name == "n"){
        username = tokens_name;
      } else {
        names = fs.readFileSync('names.txt', 'utf8');
        username = names.split("\n")[Math.floor(Math.random() * names.split("\n").length)];
      }
      const password = tokens_password;
      const page2 = (await chrome.pages())[0];
      var email;
      while(!email){
        try {
          email = await genmail(page2);
        } catch(e){};
      }
      const dspage = disc;
      await discordInput(dspage, username, password, email);

      const client = disc._client;
      var token;

      client.on('Network.webSocketFrameSent', ({response}) => {
        try {
          const json = JSON.parse(response.payloadData);
          if(!token && json["d"]["token"]){
            token = json["d"]["token"];
          };
        } catch(e){};
      })
      await captchaby(dspage);
      let verifyy = await emailvery(page2);
      await verif2(chrome, verifyy);
      fs.appendFileSync("./accounts.txt", email + ":" + password + ":" + token + "\n");
      fs.appendFileSync("./tokens.txt", token + "\n");
      success += 1;

      let today = new Date();

      var hours = ('0' + today.getHours()).slice(-2); 
      var minutes = ('0' + today.getMinutes()).slice(-2);
      var seconds = ('0' + today.getSeconds()).slice(-2); 

      var timeString = hours + ':' + minutes  + ':' + seconds;
      console.log(timeString + " - \x1B[34m[ \x1b[37m* \x1B[34m] \x1b[37mToken Generate Finished");
      return token;
    }
    

    (async () => {
      for (let i = 0; i < HowTokens; i++) {
        const browser = await puppeteer.launch(cfg)
        try {
          const page = await browser.newPage()
          const infos = await create_accinfos(browser, page);
          if(webhook_use == 'y'){
            hook = new Webhook(webhook_url);
            hook.setUsername("LEAKED | TOKEN GENERATOR | NAYFER#0007 | M1000")
            hook.setAvatar(webhook_profile);
            var cfg2 = {
                'Content-Type': 'application/json',
                'Authorization': infos
            }
            var data = (await axios.get('https://discord.com/api/v9/users/@me', { headers: cfg2 })).data;
            var embed = new MessageBuilder()
                .setTitle('Kables Token-Gen')
                .setURL('http://disc.sellix,io/')
                .addField('Token Generated', `ID : ${data.id}\nDISCORD TAG : ${data.username}#${data.discriminator}`, false)
                .setColor('#2f3136')
                .setFooter(webhook_name, webhook_profile)
                .setTimestamp();
            hook.send(embed);
          }  
        } catch(e) {
          console.log(e);
        } finally {
          try{
            await sleep(10000);
            browser.close();
            await sleep(96000);
          } catch(e){};
        }
      }
      main()
    })();
  }


  else if(choice == 2){
    await sleep(1000);
  }

  else{
    console.log(''.red);
    await sleep(1000);
    main()
  }
}

main()
