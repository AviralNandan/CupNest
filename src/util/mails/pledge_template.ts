export function pledge_template(): string {
    return `<!DOCTYPE html>
<html>
<head>
    <title>Take the Pledge: Say No to Single-Use Plastic Cups!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: #007BFF;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content h2 {
            color: #333333;
        }
        .content p {
            color: #555555;
            line-height: 1.6;
        }
        .image-container {
            text-align: center;
            margin: 20px 0;
        }
        .image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        .footer {
            background: #f4f4f4;
            color: #888888;
            text-align: center;
            padding: 10px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>Take the Pledge!</h1>
        </div>

        <!-- Content -->
        <div class="content">
            <h2>Say No to Single-Use Plastic Cups</h2>
            <p>
                Every year, billions of single-use plastic cups end up in landfills and oceans, harming wildlife and polluting our planet. 
                Together, we can make a difference by switching to reusable options.
            </p>

            <!-- Image -->
            <div class="image-container">
                <img src="https://xzy5oofpng.ufs.sh/f/HHzxRMaeyzLrJzJWjl9YXswGWQtDr0iPBaOIFxUSdb3KqA5j" alt="Say No to Plastic Cups">
            </div>

            <p>
                Join us in pledging to stop using single-use plastic cups. Your small change can have a big impact on the environment!
            </p>

            <!-- Another Image -->
            <div class="image-container">
                <img src="https://xzy5oofpng.ufs.sh/f/HHzxRMaeyzLrgfGPtAeyB05zAHKirhJ2sPxqnOmpTRS9bgIj" alt="Choose Reusable Cups">
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            © 2025 CupNest
        </div>
    </div>
</body>
</html>
`
}