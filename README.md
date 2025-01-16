# DevOrNot Engineering Portfolio

### Project Dependencies
To set up the project, install the following dependencies:
```bash
npm install 
```

### Running the Application Locally
To start the development server, run:
```bash
npm run dev
```

### Deploying on Google Cloud Run
1. **Initialize the Project**  
   ```bash
   npm init -y
   ```

2. **Update `package.json`**  
   Change the script section to:
   ```json
   "start": "node index.js"
   ```

3. **Install Express in the Root Folder**  
   ```bash
   npm install express
   ```

4. **Create `index.js` in the Root Folder**  
   Add your Express code to this file to serve the application.

5. **Google Cloud CLI Commands**  
   From the root directory (`/tomy-hui/`), authenticate and set your Google Cloud project:
   ```bash
   gcloud auth login
   gcloud config set project tomy-hui-web
   ```

6. **Deploy to Google Cloud Run**  
   Run the deployment command:
   ```bash
   gcloud run deploy tomy-hui-frontend-web
   ```
   - **Region**: `asia-southeast1`
   - **Docker**: Select "Y"
   - **Unauthenticated Invocations**: Select "Y" for open access


### Changing Domain Name
You may later update to a custom domain through the Google Cloud Console.


### Errors
Ensure that root project files are not ignored in the .gitignore file 
Ignoring git modules files will cause Google Cloud Run to have issues deploying the web app. 

---

**Reference**  
Watch the full setup guide: [YouTube Tutorial](https://www.youtube.com/watch?v=NMnKGHgw8aM)
