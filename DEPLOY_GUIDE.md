# Deployment Guide for Final Exam

This guide explains how to deploy your two projects (`project-node` and `project-python`) using the provided GitHub Actions workflows.

## Prerequisites

1.  **GitHub Account**: You already have this.
2.  **Cloud Hosting Account**: Recommended free tiers:
    - **Render.com** (Best for both Node and Python backends).
    - **Vercel** (Good for Frontend/Node, supporting Python serverless).
    - **Glitch** (Good for Node).
    - **PythonAnywhere** (Good for Python).

## Option 1: Deploying to Render (Recommended for simplicity)

### A. Setup `project-node` on Render

1.  Log in to [Render.com](https://render.com/).
2.  Click **New +** -> **Web Service**.
3.  Connect your GitHub repository `ThiCK1NguonMo`.
4.  Scrolldown to configure:
    - **Root Directory**: `project-node`
    - **Runtime**: Node
    - **Build Command**: `npm install`
    - **Start Command**: `node server.js`
5.  Click **Create Web Service**.
6.  **Copy the Deploy Hook**:
    - Go to **Settings** -> **Deploy Hook**.
    - Copy the URL (it looks like `https://api.render.com/deploy/srv-...`).
    - Go to your **GitHub Repo Settings** -> **Secrets and variables** -> **Actions**.
    - Add a new Repository Secret named `RENDER_DEPLOY_HOOK_NODE` and paste the URL.

### B. Setup `project-python` on Render

1.  Click **New +** -> **Web Service**.
2.  Connect the same repository.
3.  Configuration:
    - **Root Directory**: `project-python`
    - **Runtime**: Python 3
    - **Build Command**: `pip install -r requirements.txt`
    - **Start Command**: `gunicorn app:app` (Render might need `gunicorn` added to requirements.txt, or use `python app.py` if just testing)
      - _Note: For production, `gunicorn` is better. Added to requirements.txt just in case._
4.  Click **Create Web Service**.
5.  **Copy the Deploy Hook**:
    - Go to **Settings** -> **Deploy Hook**.
    - Copy the URL.
    - Add a new Repository Secret named `RENDER_DEPLOY_HOOK_PYTHON` and paste the URL.

## Option 2: Verifying CI/CD without Cloud Deploy

If you just want to see the GitHub Actions run successfully (Green Checkmark):

1.  Push the code to GitHub:
    ```bash
    git add .
    git commit -m "Complete final exam exercise"
    git push origin main
    ```
2.  Go to the **Actions** tab in your GitHub repository.
3.  You will see two workflows running: `Node.js CI/CD` and `Python CI/CD`.
4.  They should fail on the "Deploy" step if you haven't set the Secrets, or just "echo" success if you kept my echo command. (Currently, they just "echo", so they will PASS green).

## How to Submit

1.  Take screenshots of the **Code structure**.
2.  Take screenshots of the **Actions tab** showing all green checks.
3.  (Optional) Send the link to the live deployed sites if you did the Render setup.
