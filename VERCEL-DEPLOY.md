# Deploy Harman da Kulcha on Vercel (no GitHub needed)

## Option A: Vercel website (drag & drop)

1. Go to **https://vercel.com** and sign up (free, use Google/GitHub/email).
2. Click **Add New…** → **Project** (or **Upload** if you see it).
3. **Drag and drop** your folder **Harman Da kulcha** (the one with `index.html`) onto the page.
4. If Vercel asks for **scope**, choose **avdeshgill04-9723**.
5. Click **Deploy**. In about a minute you’ll get a link like `https://harman-da-kulcha-xxx.vercel.app`.
6. (Optional) In Project **Settings → Domains** you can add a custom name like `harman-da-kulcha.vercel.app`.

---

## Option B: Vercel CLI (from your PC)

1. Install Node.js if you don’t have it: **https://nodejs.org** (LTS).
2. Open **PowerShell** and run:

```powershell
cd "c:\Users\HP\OneDrive\Desktop\Harman Da kulcha"
npx vercel
```

3. First time: log in (browser will open). Link your account.
4. When asked:
   - **Set up and deploy?** Yes
   - **Which scope?** Your account
   - **Link to existing project?** No
   - **Project name?** harman-da-kulcha (or press Enter)
   - **In which directory is your code?** ./ (press Enter)
5. You’ll get a **Preview URL** right away. To make it production:

```powershell
npx vercel --prod
```

Your site will be live at something like **https://harman-da-kulcha.vercel.app**.

---

## Updating the site later

- **If you used drag & drop:** Upload the folder again (same steps).
- **If you used CLI:** Run `npx vercel --prod` again from the project folder after changing files.

No GitHub required.
