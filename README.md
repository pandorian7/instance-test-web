# ApexStore - E-Commerce App with CTF Flag

A sleek, lightweight React e-commerce application UI with:
- **Product catalog & shopping cart** with quantity controls and real-time total calculation.
- **Auto-authenticated Profile Page**: Automatically navigates to the signed-in user's profile view (no login credentials required).
- **CTF Flag Display**: The user profile page displays a CTF challenge flag injected at build time.
- **Production Docker setup**: Multi-stage Dockerfile that receives the `FLAG` build argument and serves the compiled application with Nginx.

---

## 🛠 Local Development

```bash
# Install dependencies
pnpm install

# Run Vite development server
pnpm dev
```

During development, you can set the flag in your `.env` or run with:
```bash
VITE_FLAG="FLAG{dev_flag_example}" pnpm dev
```

---

## 🐳 Docker Build with CTF Flag

Build the Docker image with your custom CTF flag using `--build-arg FLAG`:

```bash
docker build --build-arg FLAG="FLAG{y0u_f0und_th3_pr0f1le_fl4g_1337}" -t apexstore .
```

Run the container:

```bash
docker run -d -p 8080:80 --name apexstore-app apexstore
```

Access the app in your browser at `http://localhost:8080`.
- Click on **"Alex Mercer" / Profile** in the top navigation (or visit `http://localhost:8080/#profile`) to view the profile and the CTF flag.
