<script>
  import SvelteMarkdown from "svelte-markdown";

  const source = `
# Librewave Code of Conduct

## 1. Introduction

The Librewave community is committed to providing a friendly, safe, and welcoming environment for all, regardless of nationality, age, gender identity, sexual orientation, disability, ethnicity, religion, or any other personal characteristic. This Code of Conduct outlines our expectations for all community members and participants to foster a respectful and inclusive environment.

## 2. Our Standards

We encourage positive and constructive behavior, including:

- Demonstrating empathy and kindness toward other members
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Assuming good faith and being patient with others
- Encouraging collaboration and community-building

We do not tolerate unacceptable behavior, such as:

- Harassment or intimidation, including offensive comments or jokes related to personal characteristics
- Unwanted attention, stalking, or following
- Publishing others' private information without explicit permission
- Threats of violence or incitement of violence towards any individual or group
- Any other conduct that is generally considered inappropriate or harmful

## 3. Reporting and Enforcement

If you experience or witness unacceptable behavior, or have any other concerns, please report it to the Librewave community moderators or administrators. They will review and investigate all reports and take appropriate action, which may include warning the offender, temporarily banning them, or permanently expelling them from the community.

## 4. Scope

This Code of Conduct applies to all Librewave community spaces, including online forums, mailing lists, chatrooms, and any other communication channels. It also applies to community events, such as meetups and conferences.

## 5. Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 2.1, available at [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html)

By participating in the Librewave community, you agree to abide by this Code of Conduct and cooperate with the moderators and administrators to maintain a safe and welcoming environment for everyone.

  `;
</script>

<svelte:head>
  <title>Code of Conduct - Librewave</title>
</svelte:head>

<section class="my-20 mx-auto max-w-3xl px-4 md:px-8">
  <div class="prose prose-invert max-w-none overflow-hidden overflow-wrap break-words">
    <SvelteMarkdown {source} />
  </div>
</section>
