# Deploy Harman da Kulcha with GitHub Pages

Follow these steps in order.

---

## Step 1: Create a GitHub account (if you don’t have one)

- Go to **https://github.com** and sign up (free).

---

## Step 2: Create a new repository on GitHub

1. Click the **+** (top right) → **New repository**.
2. **Repository name:** `harman-da-kulcha` (or any name you like).
3. Set visibility to **Public**.
4. **Do not** check “Add a README file”.
5. Click **Create repository**.

---

## Step 3: Push your website from your computer

Open **PowerShell** or **Command Prompt**, then run these commands **one by one**.

**Go to your project folder:**
```powershell
cd "c:\Users\HP\OneDrive\Desktop\Harman Da kulcha"
```

**Initialize Git and make the first commit:**
```powershell
git init
git add index.html styles.css script.js
git commit -m "Harman da Kulcha website"
```

**Connect to GitHub:**
```powershell
git remote add origin https://github.com/avdeshgill04/harman-da-kulcha.git
```

**Push to GitHub:**
```powershell
git branch -M main
git push -u origin main
```

When asked, sign in with your **GitHub username** and **password**.  
(If you use 2FA, you need a **Personal Access Token** instead of password: GitHub → Settings → Developer settings → Personal access tokens.)

---

## Step 4: Turn on GitHub Pages

1. On GitHub, open your repo **harman-da-kulcha**.
2. Click **Settings** (top menu of the repo).
3. In the left sidebar, click **Pages** (under “Code and automation”).
4. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` → `/ (root)` → **Save**
5. Wait 1–2 minutes. Refresh the Pages settings page.
6. You’ll see: **Your site is live at**  
   **https://avdeshgill04.github.io/harman-da-kulcha**

---

## Done

Share that link (e.g. on WhatsApp). Your Harman da Kulcha site is live.

To update the site later: change the files, then run:
```powershell
cd "c:\Users\HP\OneDrive\Desktop\Harman Da kulcha"
git add .
git commit -m "Update website"
git push
```
