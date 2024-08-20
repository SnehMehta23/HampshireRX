<template>
    <AppHeader />
    <div class="relative" ref="heroRef">
        <div :class="[
            'mx-auto px-4 bg-pharmaBlue-400 rounded-bl-3xl rounded-br-3xl pb-16',
            'transition-all duration-1000 ease-out shadow-md shadow-pharmaBlue-400'
        ]">
            <div class="py-2 px-20 mb-2">
                <NuxtLink to="/" class="">
                    <img src="~/public/images/logos/secondaryWideLogo.png" alt="Hampshire Pharmacy Logo" class="w-64" />
                </NuxtLink>
            </div>
            <div class="flex flex-col items-center jusitfy-center">
                <h1 class="text-5xl font-bold mb-4">Affordable Medications, Trusted Service</h1>
                <p class="text-2xl mb-4">Access reliable generic drugs at fair prices, no insurance needed!</p>
            </div>
            <div class="flex flex-col items-center justify-center mb-4 2xl:mb-6 text-dark-charcoal">
                <span
                    class="animate-fade-in-left text-md 2xl:text-5xl dark:text-white bg-white/20 p-2 border border-white/40 shadow-lg backdrop-blur-lg rounded-full">How
                    Hampshire Pharmacy Works <span class="text-orange-500">In Just Three
                        Steps</span></span>
            </div>

            <!-- TODO if we're on the privacy/faq and about page make a toggle to reveal easy steps -->
            <!-- <HowToCards /> -->

            <!-- SearchBar positioned absolutely -->
            <div :class="[
                'absolute left-1/2 bg-pharmaBlue-400 rounded-bl-full rounded-br-full py-6 transform -translate-x-1/2 mt-6 w-full max-w-4xl px-12',
                'transition-all duration-1000 ease-out delay-500 shadow-md shadow-pharmaBlue-400',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            ]">
                <SearchBar />
            </div>
        </div>
    </div>

    <!-- Spacer div to push content below the search bar -->
    <div class="h-16"></div>

    <div class="flex flex-col items-center my-8">
        <div class="w-full md:w-3/4 mx-auto">
            <div class="container mx-auto">
                <h1 class="text-3xl font-bold mb-4">PRIVACY POLICY</h1>
                <p class="text-gray-600 mb-4">Last updated March 05, 2024</p>

                <div class="mb-4 bg-white shadow-md rounded-lg p-4">
                    <p>This privacy notice for Maniar Pharmacy Inc. (doing business as Hampshire Pharmacy) ("we," "us,"
                        or
                        "our"), describes how and why we might collect, store, use, and/or share ("process") your
                        information when you use our services ("Services"), such as when you:
                        Visit our website at https://hampshirepharmacy.com/, or any website of ours that links to this
                        privacy notice. Download and use our mobile application, our Facebook application, or any other
                        application of ours that links to this privacy notice. Engage with us in other related ways,
                        including any sales, marketing, or events.
                        Questions or concerns? Reading this privacy notice will help you understand your privacy rights
                        and
                        choices. If you do not agree with our policies and practices, please do not use our Services. If
                        you
                        still have any questions or concerns, please contact us at hampshirepharmacy@gmail.com.</p>
                </div>

                <h6 class="text-xl font-semibold mb-2">SUMMARY OF KEY POINTS</h6>
                <p class="mb-4">
                    This summary provides key points from our privacy notice, but you can find out more details about
                    any of these topics by clicking the link following each key point or by using our table of contents
                    below to find the section you are looking for.
                </p>

                <p class="mb-4">
                    <strong>What personal information do we process?</strong> When you visit, use, or navigate our
                    Services, we may process personal information depending on how you interact with us and the
                    Services, the choices you make, and the products and features you use. Learn more about personal
                    information you disclose to us.
                </p>
                <p class="mb-4">
                    <strong>Do we process any sensitive personal information?</strong> We do not process sensitive
                    personal information.
                </p>
                <p class="mb-4">
                    <strong>Do we receive any information from third parties?</strong> We do not receive any information
                    from third parties.
                </p>
                <p class="mb-4">
                    <strong>How do we process your information?</strong> We process your information to provide,
                    improve, and administer our Services, communicate with you, for security and fraud prevention, and
                    to comply with law. We may also process your information for other purposes with your consent. We
                    process your information only when we have a valid legal reason to do so. Learn more about how we
                    process your information.
                </p>
                <p class="mb-4">
                    <strong>In what situations and with which types of parties do we share personal
                        information?</strong> We may share information in specific situations and with specific
                    categories of third parties. Learn more about when and with whom we share your personal information.
                </p>
                <p class="mb-4">
                    <strong>What are your rights?</strong> Depending on where you are located geographically, the
                    applicable privacy law may mean you have certain rights regarding your personal information. Learn
                    more about your privacy rights.
                </p>
                <p class="mb-4">
                    <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by
                    submitting a data subject access request, or by contacting us. We will consider and act upon any
                    request in accordance with applicable data protection laws.
                </p>

                <p class="mb-4">
                    Want to learn more about what we do with any information we collect? Review the privacy notice in
                    full below.
                </p>

                <div class="container mx-auto">
                    <div class="text-sm mb-4">
                        <h6 class="text-lg font-semibold">TABLE OF CONTENTS</h6>
                        <ol class="list-none pl-0">
                            <li><a href="#section1" class="text-blue-500 hover:underline">WHAT INFORMATION DO WE
                                    COLLECT?</a></li>
                            <li><a href="#section2" class="text-blue-500 hover:underline">HOW DO WE PROCESS YOUR
                                    INFORMATION?</a></li>
                            <li><a href="#section3" class="text-blue-500 hover:underline">WHEN AND WITH WHOM DO WE SHARE
                                    YOUR PERSONAL INFORMATION?</a></li>
                            <li><a href="#section4" class="text-blue-500 hover:underline">HOW LONG DO WE KEEP YOUR
                                    INFORMATION?</a></li>
                            <li><a href="#section5" class="text-blue-500 hover:underline">DO WE COLLECT INFORMATION FROM
                                    MINORS?</a></li>
                            <li><a href="#section6" class="text-blue-500 hover:underline">WHAT ARE YOUR PRIVACY
                                    RIGHTS?</a></li>
                            <li><a href="#section7" class="text-blue-500 hover:underline">CONTROLS FOR DO-NOT-TRACK
                                    FEATURES</a></li>
                            <li><a href="#section8" class="text-blue-500 hover:underline">DO WE MAKE UPDATES TO THIS
                                    NOTICE?</a></li>
                            <li><a href="#section9" class="text-blue-500 hover:underline">HOW CAN YOU CONTACT US ABOUT
                                    THIS NOTICE?</a></li>
                            <li><a href="#section10" class="text-blue-500 hover:underline">HOW CAN YOU REVIEW, UPDATE,
                                    OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
                        </ol>
                    </div>

                    <h6 id="section1" class="text-lg font-semibold mb-2">1. WHAT INFORMATION DO WE COLLECT?</h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">Personal information you disclose to us</p>
                            <p class="mb-2">In Short: We collect personal information that you provide to us.</p>
                            <p class="mb-2">
                                We collect personal information that you voluntarily provide to us when you express an
                                interest in obtaining
                                information about us or our products and Services, when you participate in activities on
                                the Services, or
                                otherwise when you contact us.
                            </p>
                            <p class="mb-2">
                                <strong>Sensitive Information.</strong> We do not process sensitive information.
                            </p>
                            <p class="mb-2">
                                All personal information that you provide to us must be true, complete, and accurate,
                                and you must notify us of
                                any changes to such personal information.
                            </p>
                        </div>
                    </div>

                    <h6 id="section2" class="text-lg font-semibold mb-2">2. HOW DO WE PROCESS YOUR INFORMATION?</h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">
                                In Short: We process your information to provide, improve, and administer our Services,
                                communicate with you, for security and fraud prevention, and to comply with law. We may
                                also process your information for other purposes with your consent.
                            </p>
                            <p class="mb-2">
                                <strong>We process your personal information for a variety of reasons, depending on how
                                    you interact with our Services, including:</strong>
                            </p>
                            <ul class="list-disc pl-5">
                                <li class="mb-2"><strong>To send you marketing and promotional communications.</strong>
                                    We may process the personal information you send to us for our marketing purposes,
                                    if this is in accordance with your marketing preferences. You can opt out of our
                                    marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY
                                    RIGHTS?" below.</li>
                                <li class="mb-2"><strong>To deliver targeted advertising to you.</strong> We may process
                                    your information to develop and display personalized content and advertising
                                    tailored to your interests, location, and more.</li>
                                <li class="mb-2"><strong>To post testimonials.</strong> We post testimonials on our
                                    Services that may contain personal information.</li>
                                <li class="mb-2"><strong>To evaluate and improve our Services, products, marketing, and
                                        your experience.</strong> We may process your information when we believe it is
                                    necessary to identify usage trends, determine the effectiveness of our promotional
                                    campaigns, and to evaluate and improve our Services, products, marketing, and your
                                    experience.</li>
                                <li class="mb-2"><strong>To determine the effectiveness of our marketing and promotional
                                        campaigns.</strong> We may process your information to better understand how to
                                    provide marketing and promotional campaigns that are most relevant to you.</li>
                            </ul>
                        </div>
                    </div>

                    <h6 id="section3" class="text-lg font-semibold mb-2">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                        INFORMATION?</h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">
                                In Short: We may share information in specific situations described in this section
                                and/or with the following categories of third parties.
                            </p>
                            <p class="mb-2">
                                <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may
                                share your data with third-party vendors, service providers, contractors, or agents who
                                perform services for us or on our behalf and require access to such information to do
                                that work. We may allow selected third parties to use tracking technology on the
                                Services, which will enable them to collect data about how you interact with the
                                Services over time. This information may be used to, among other things, analyze and
                                track data, determine the popularity of certain content, pages, or features, and better
                                understand online activity.
                            </p>
                            <p class="mb-2">
                                <strong>Business Transfers.</strong> We may share or transfer your information in
                                connection with, or during negotiations of, any merger, sale of company assets,
                                financing, or acquisition of all or a portion of our business to another company.
                            </p>
                            <p class="mb-2">
                                <strong>Affiliates.</strong> We may share your information with our affiliates, in which
                                case we will require those affiliates to honor this privacy notice. Affiliates include
                                our parent company and any subsidiaries, joint venture partners, or other companies that
                                we control or that are under common control with us.
                            </p>
                            <p class="mb-2">
                                <strong>Business Partners.</strong> We may share your information with our business
                                partners to offer you certain products, services, or promotions.
                            </p>
                            <p class="mb-2">
                                <strong>Other Users.</strong> When you share personal information (for example, by
                                posting comments, contributions, or other content to the Services) or otherwise interact
                                with public areas of the Services, such personal information may be viewed by all users
                                and may be publicly made available outside the Services in perpetuity. If you interact
                                with other users of our Services and register through a social network (such as
                                Facebook), your contacts on the social network will see your name, profile photo, and
                                descriptions of your activity. Similarly, other users will be able to view descriptions
                                of your activity, communicate with you within our Services, and view your profile.
                            </p>
                        </div>
                    </div>

                    <h6 id="section4" class="text-lg font-semibold mb-2">4. HOW LONG DO WE KEEP YOUR INFORMATION?</h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">
                                In Short: We keep your information for as long as necessary to fulfill the purposes
                                outlined in this privacy notice unless otherwise required by law.
                            </p>
                            <p class="mb-2">
                                We will only keep your personal information for as long as it is necessary for the
                                purposes set out in this privacy notice, unless a longer retention period is required or
                                permitted by law (such as tax, accounting, or other legal requirements).
                            </p>
                        </div>
                    </div>

                    <h6 id="section5" class="text-lg font-semibold mb-2">5. DO WE COLLECT INFORMATION FROM MINORS?</h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">
                                In Short: We do not knowingly collect data from or market to children under 18 years of
                                age.
                            </p>
                            <p class="mb-2">
                                We do not knowingly solicit data from or market to children under 18 years of age. By
                                using the Services, you represent that you are at least 18 or that you are the parent or
                                guardian of such a minor and consent to such minor dependent’s use of the Services.
                            </p>
                        </div>
                    </div>

                    <h6 id="section6" class="text-lg font-semibold mb-2">6. WHAT ARE YOUR PRIVACY RIGHTS?</h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">
                                In Short: You may review, change, or terminate your account at any time.
                            </p>
                            <p class="mb-2">
                                If you are located in the EEA or UK and you believe we are unlawfully processing your
                                personal information, you also have the right to complain to your local data protection
                                supervisory authority. You can find their contact details here: <a
                                    href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                                    class="text-blue-500 hover:underline"
                                    target="_blank">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
                            </p>
                            <p class="mb-2">
                                If you are located in Switzerland, the contact details for the data protection
                                authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                                    class="text-blue-500 hover:underline"
                                    target="_blank">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
                            </p>
                        </div>
                    </div>

                    <h6 id="section7" class="text-lg font-semibold mb-2">7. CONTROLS FOR DO-NOT-TRACK FEATURES</h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">
                                Most web browsers and some mobile operating systems and mobile applications include a
                                Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy
                                preference not to have data about your online browsing activities monitored and
                                collected. At this stage, no uniform technology standard for recognizing and
                                implementing DNT signals has been finalized. As such, we do not currently respond to DNT
                                browser signals or any other mechanism that automatically communicates your choice not
                                to be tracked online. If a standard for online tracking is adopted that we must follow
                                in the future, we will inform you about that practice in a revised version of this
                                privacy notice.
                            </p>
                        </div>
                    </div>

                    <h6 id="section8" class="text-lg font-semibold mb-2">8. DO WE MAKE UPDATES TO THIS NOTICE?</h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">
                                In Short: Yes, we will update this notice as necessary to stay compliant with relevant
                                laws.
                            </p>
                            <p class="mb-2">
                                We may update this privacy notice from time to time in order to stay compliant with
                                relevant laws. The updated version will be indicated by an updated "Revised" date and
                                the updated version will be effective as soon as it is accessible. If we make material
                                changes to this privacy notice, we may notify you either by prominently posting a notice
                                of such changes or by directly sending you a notification. We encourage you to review
                                this privacy notice frequently to be informed of how we are protecting your information.
                            </p>
                        </div>
                    </div>

                    <h6 id="section9" class="text-lg font-semibold mb-2">9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">
                                If you have questions or comments about this notice, you may email us at
                                hampshirepharmacy@gmail.com or by post to:
                            </p>
                            <p class="mb-2">
                                Maniar Pharmacy Inc. <br />
                                123 Main Street <br />
                                Springfield, IL 62701 <br />
                                United States
                            </p>
                        </div>
                    </div>

                    <h6 id="section10" class="text-lg font-semibold mb-2">10. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE
                        DATA WE COLLECT FROM YOU?</h6>
                    <div class="bg-white shadow-md rounded-lg mb-4">
                        <div class="p-4">
                            <p class="mb-2">
                                Based on the applicable laws of your country, you may have the right to request access
                                to the personal information we collect from you, change that information, or delete it
                                in some circumstances. To request to review, update, or delete your personal
                                information, please email: <a href="mailto:hampshirepharmacy@gmail.com"
                                    class="text-blue-500 hover:underline">hampshirepharmacy@gmail.com</a>. We will
                                respond to your
                                request within 30 days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AppFooter />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AppHeader from '../components/layout/appHeader.vue'
import SearchBar from '../components/searchBar.vue'
import AppFooter from '~/components/layout/appFooter.vue';

const isVisible = ref(false);
const heroRef = ref(null);

let observer = null;

onMounted(() => {
    // Delay the animation start by 1 second
    setTimeout(() => {
        observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                isVisible.value = true;
                observer.disconnect();  // Stop observing once visible
            }
        }, { threshold: 0.1 });  // Trigger when 10% of the element is visible

        if (heroRef.value) {
            observer.observe(heroRef.value);
        }
    }, 250);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>