#Init
1. npm install
2. npm run prod 
3. cp .env.example .env
4. define variables in .env

# Start
node index.js

# Update environment variables from .env
export $(grep -v '^#' .env | xargs -d '\n')

# Update Let's Encrypt Certificate
certbot renew --dry-run