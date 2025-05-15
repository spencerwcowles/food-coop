export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4A6741] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-green">
            <h2>Introduction</h2>
            <p>
              The UCSD Food Co-op ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website,
              participate in our events, or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the site or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>

            <h3>Personal Data</h3>
            <p>
              When you sign up for our newsletter, volunteer with us, or participate in our events, we may collect
              personally identifiable information, such as your:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Student ID number (for verification purposes only)</li>
            </ul>

            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access our website, such as your IP address,
              browser type, operating system, access times, and the pages you have viewed.
            </p>

            <h2>Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you to:
            </p>
            <ul>
              <li>Administer events, services, and activities.</li>
              <li>Send you newsletters and updates about the Food Co-op.</li>
              <li>Email you regarding your volunteer shifts or participation in events.</li>
              <li>Compile anonymous statistical data for research purposes.</li>
              <li>Deliver targeted information about resources that may be of interest to you.</li>
              <li>Increase the efficiency and operation of our organization.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Food Co-op.</li>
              <li>Notify you of updates to our website and services.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>

            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to protect the rights, property, and safety
              of others, we may share your information as permitted or required by any applicable law, rule, or
              regulation.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including
              event registration, data analysis, email delivery, hosting services, and customer service.
            </p>

            <h3>Marketing Communications</h3>
            <p>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with
              third parties for marketing purposes.
            </p>

            <h3>Interactions with Other Users</h3>
            <p>
              If you interact with other users of our website or at our events, those users may see your name, profile
              photo, and descriptions of your activity.
            </p>

            <h3>Online Postings</h3>
            <p>
              When you post comments, contributions, or other content to our website or social media accounts, your
              posts may be viewed by all users and may be publicly distributed outside the site in perpetuity.
            </p>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>Policy for Children</h2>
            <p>
              We do not knowingly solicit information from or market to children under the age of 13. If you become
              aware of any data we have collected from children under age 13, please contact us using the contact
              information provided below.
            </p>

            <h2>Options Regarding Your Information</h2>
            <p>You may at any time review or change the information in your account or terminate your account by:</p>
            <ul>
              <li>Logging into your account settings and updating your account</li>
              <li>Contacting us using the contact information provided below</li>
            </ul>
            <p>
              Upon your request to terminate your account, we will deactivate or delete your account and information
              from our active databases. However, some information may be retained in our files to prevent fraud,
              troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal
              requirements.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>
              UCSD Food Co-op
              <br />
              Student Center, UCSD
              <br />
              9500 Gilman Dr.
              <br />
              La Jolla, CA 92093
              <br />
              (858) 555-1234
              <br />
              foodcoop@ucsd.edu
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
