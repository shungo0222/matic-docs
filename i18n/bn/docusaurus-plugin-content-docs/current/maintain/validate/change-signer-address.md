---
id: change-signer-address
title: আপনার স্বাক্ষরকারীর ঠিকানা পরিবর্তন করুন
description: আপনার যাচাইকারীর signer ার ঠিকানা পরিবর্তন করুন
keywords:
  - docs
  - matic
  - polygon
  - signer address
  - change
  - validator
slug: change-signer-address
image: https://wiki.polygon.technology/img/polygon-wiki.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

একটি [স্বাক্ষরকারীর ঠিকানা](/docs/maintain/glossary.md#signer-address) কী বিষয়ে তথ্য জানতে, দেখুন
[মূল ব্যবস্থাপনা](/docs/maintain/validator/core-components/key-management)।

## পূর্বশর্ত {#prerequisites}

আপনার নতুন যাচাইকারী নোড সম্পূর্ণরূপে সিঙ্ক করা হয়েছে এবং নতুন স্বাক্ষরকারীর ঠিকানা দিয়ে চলছে বলে নিশ্চিত করুন।

## স্বাক্ষরকারীর ঠিকানা পরিবর্তন করুন {#change-the-signer-address}

এই নির্দেশনা আপনার বর্তমান যাচাইকারী নোডকে নোড 1 হিসাবে এবং আপনার নতুন যাচাইকারী নোডকে নোড 2 হিসাবে উল্লেখ করে।

1. নোড 1 এর ঠিকানা দিয়ে [স্ট্যাক করা ড্যাশবোর্ড](https://staking.polygon.technology/) এ লগইন করুন।
2. আপনার প্রোফাইলে, **প্রোফাইল এডিট করুন** বিকল্পে ক্লিক করুন।
3. **স্বাক্ষরকারীর ঠিকানা**-র ক্ষেত্রে, নোড 2 এর ঠিকানা প্রদান করুন।
4. **স্বাক্ষরকারীর পাবলিক কী** এর ক্ষেত্রটিতে, নোড 2 এর পাবলিক কী প্রদান করুন।

   পাবলিক কী পাওয়ার জন্য, যাচাইকারী নোডে নিম্নলিখিত কমান্ডটি চালান:

   ```sh
   heimdalld show-account
   ```

**সেভ করুন** এ ক্লিক করলে আপনার নোডের জন্য আপনার নতুন বিবরণ সংরক্ষিত হয়ে যাবে। এর মূলত অর্থ হল, নোড 1 আপনার ঠিকানা হবে যা স্ট্যাক, কোথায় পুরস্কারগুলি পাঠানো হবে ইত্যাদি নিয়ন্ত্রণ করে। আর নোড 2 এখন ব্লক স্বাক্ষর, চেকপয়েন্ট স্বাক্ষর ইত্যাদির মতো কার্যকলাপগুলো সম্পাদন করবে।