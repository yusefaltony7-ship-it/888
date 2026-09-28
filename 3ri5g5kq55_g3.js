;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="03c3c7b3-643c-9b8f-288e-73ddeed985fe")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31645,e=>{"use strict";var t,r=((t={}).GRAPHQL_INTERNAL_SURVEY="graphql/internalSurvey",t.GRAPHQL_SURVEYS_FOR_PROVIDER="graphql/surveysForProvider",t.GRAPHQL_INTERNAL_SURVEY_QUESTION="graphql/internalSurveyQuestion",t.GRAPHQL_SURVEYS="graphql/surveys",t.GRAPHQL_SURVEYS_LIVE_STATS="graphql/surveysLiveStats",t.GRAPHQL_SURVEY_DISQUALIFICATION_WHEEL="graphql/surveyDisqualificationWheel",t.GRAPHQL_SURVEY_USER_STATE="graphql/surveyUserState",t.GRAPHQL_SURVEY_COUNTRY_STATS="graphql/getSurveyCountryStats",t.GRAPHQL_SURVEY_FIRST_BONUS="graphql/surveyFirstBonus",t.GRAPHQL_SURVEY_STREAK_SETTINGS="graphql/surveyStreakSettings",t.GRAPHQL_SURVEY_ELIGIBILITY="graphql/surveyEligibility",t.GRAPHQL_SURVEY_CONSENT="graphql/surveyConsent",t.GRAPHQL_SURVEY_BOOST_BONUS="graphql/surveyBoostBonus",t.GRAPHQL_FIVE_SURVEYS_META="graphql/fiveSurveysMeta",t.GRAPHQL_HALLOWEEN_SPECIAL_META="graphql/halloweenSpecialMeta",t.GRAPHQL_LEVELS_SPECIAL_META="graphql/levelsSpecialMeta",t.GRAPHQL_PROFILER_COMPLETED="graphql/profilerCompleted",t.GRAPHQL_IS_GHOST_ACCOUNT="graphql/isGhostAccount",t.GRAPHQL_GET_GHOST_ACCOUNT="graphql/getGhostAccount",t.GRAPHQL_JACKPOT_IS_ACTIVE="graphql/jackpotIsEventActive",t.GRAPHQL_JACKPOT_GET_ACTIVE_JACKPOTS="graphql/activeJackpots",t.GRAPHQL_JACKPOT_GET_JACKPOT_CONFIG="graphql/jackpotConfig",t.GRAPHQL_JACKPOT_GET_JACKPOT_WINNERS="graphql/jackpotWinners",t.GRAPHQL_JACKPOT_GET_TOTAL_WON="graphql/jackpotTotalWon",t.GRAPHQL_JACKPOT_GET_MY_BETS="graphql/jackpotMyBets",t.GRAPHQL_JACKPOT_GET_MY_WINS="graphql/jackpotMyWins",t.GRAPHQL_JACKPOT_GET_SLOTS="graphql/jackpotSlots",t.GRAPHQL_JACKPOT_GET_SLOT_ELEMENTS="graphql/jackpotSlotElements",t.REST_JACKPOT_GET_USER_BETS="rest/jackpotUserBets",t.REST_JACKPOT_GET_USER_BETS_INFO="rest/jackpotUserBetsInfo",t.GRAPHQL_GET_PENDING_OFFERS="graphql/pendingOffers",t.GRAPHQL_GET_OFFER_TASKS="graphql/getOfferTasks",t.GRAPHQL_GET_USER_REWARDS="graphql/userRewards",t.GRAPHQL_GET_REF_EARNINGS="graphql/refEarnings",t.GRAPHQL_GET_MULTIPLE_OFFERS="graphql/getMultipleOffers",t.GRAPHQL_GET_AFFILIATES="graphql/getAffiliates",t.GRAPHQL_GET_AFFILIATE_LEADERS="graphql/getAffiliateLeaders",t.GRAPHQL_GET_TOTAL_REFEARNINGS="graphql/getTotalRefEarnings",t.GRAPHQL_GET_AFFILIATE_INFO="graphql/affiliateInfo",t.GRAPHQL_GET_AFFILIATE_REF_CODE="graphql/affiliateRefCode",t.GRAPHQL_GET_AFFILIATE_VERIFICATION_RESULT="graphql/affiliateVerificationResult",t.GRAPHQL_GET_CASHOUT_GOAL_SETTINGS="graphql/cashoutGoalSettings",t.GRAPHQL_FIND_OFFERS_BY_QUERY="graphql/findOffersByQuery",t.GRAPHQL_GET_OFFER_TASK_COMPLETIONS="graphql/getOfferTaskCompletions",t.GRAPHQL_GET_SURVEYS_IN_PROGRESS="graphql/surveysInProgress",t.GRAPHQL_HAS_SURVEYS_IN_PROGRESS="graphql/hasSurveysInProgress",t.GRAPHQL_GET_MY_OFFERS="graphql/getMyOffers",t.GRAPHQL_GET_OFFER_COMPLETED="graphql/getOffersCompleted",t.GRAPHQL_GET_REWARD_DATA="graphql/rewardData",t.GRAPHQL_GET_PROVIDERS="graphql/getProviders",t.GRAPHQL_GET_WITHDRAWALS="graphql/getWithdrawals",t.GRAPHQL_GET_PROFILE="graphql/getProfile",t.GRAPHQL_GET_USER_EARNINGS_ACTIVITY="graphql/getUserEarningsActivity",t.GRAPHQL_GET_USER_STAKE_WITHDRAWAL_PREFERENCES="graphql/getUserStakeWithdrawalPreferences",t.GRAPHQL_UPDATE_STAKE_PREFERENCE="graphql/updateStakePreference",t.GRAPHQL_SLOT_GET_TOP_7D_WINNERS="graphql/slotTop7dWinners",t.GRAPHQL_SLOT_GET_QUESTS_STEP_CLAIMS_TOTAL_REWARD="graphql/setQuestStepClaimsTotalReward",t.GRAPHQL_SLOT_GET_QUESTS="graphql/setQuests",t.GRAPHQL_SLOT_SLOT_GET_ELIGIBLE_OFFERS="graphql/slotEligibleOffers",t.GRAPHQL_SLOT_SLOT_SPIN="graphql/slotSpin",t.GRAPHQL_SLOT_SLOT_CLAIM_QUEST_STEP_COIN_REWARD="graphql/slotClaimQuestStepCoinReward",t.GRAPHQL_SLOT_SLOT_CLAIM_QUEST_STEP_STAKE_REWARD="graphql/slotClaimQuestStepStakeReward",t.GRAPHQL_SLOT_SLOT_GET_BALANCE="graphql/slotGetBalance",t.GRAPHQL_SLOT_SLOT_GET_WEEK_TOP_QUESTS_STEP_CLAIMS="graphql/slotGetWeekTopQuestsStepClaims",t.GRAPHQL_CAN_CLAIM_IOS_SHORTCUT_QUEST="graphql/canClaimIosShortcutQuest",t.GRAPHQL_GET_USER_INFO="graphql/getUserInfo",t.GRAPHQL_GET_USER_UID="graphql/getUserUid",t.GRAPHQL_GET_UNWITHDRAWABLE_BALANCE_ENTRIES="graphql/getUnwithdrawableBalanceEntries",t.GRAPHQL_GET_TODAY_EARNINGS="graphql/getTodayEarnings",t.GRAPHQL_GET_WALLS_FOR_USER="graphql/getWallsForUser",t.GRAPHQL_GET_USER_CURRENCY="graphql/getUserCurrency",t.SOCKET_GET_USER_CURRENCY="socket/getUserCurrency",t.GRAPHQL_FIND_EARN_ACTIVITY_FEED="graphql/findEarnActivityFeed",t.GRAPHQL_FIND_WITHDRAWAL_ACTIVITY_FEED="graphql/findWithdrawActivityFeed",t.GRAPHQL_FULL_ACTIVITY_FEED="graphql/getFullActivityFeed",t.GRAPHQL_GET_WITHDRAWN_COINS_BY_MONTH="graphql/getWithdrawnCoinsByMonth",t.GRAPHQL_GET_OFFER_QUERY="graphql/getOfferQuery",t.GRAPHQL_GET_NOTIFICATIONS_INFO="graphql/getNotificationsInfo",t.GRAPHQL_GET_NOTIFICATIONS="graphql/getNotifications",t.GRAPHQL_GET_OFFERS="graphql/getOffers",t.GRAPHQL_SEARCH_OFFERS="graphql/searchOffers",t.GRAPHQL_GET_GAMES="graphql/getGames",t.GRAPHQL_GET_GAME="graphql/getGame",t.GRAPHQL_GET_GAME_CATEGORIES_INFO="graphql/getGameCategoriesInfo",t.GRAPHQL_GET_FEATURED_OFFERS="graphql/getFeaturedOffers",t.GRAPHQL_GET_LITE_OFFERS="graphql/getLiteOffers",t.GRAPHQL_GET_CASHBACK_OFFERS="graphql/getCashbackOffers",t.GRAPHQL_GET_CASHBACK_PROMOTED_OFFERS="graphql/getCashbackPromotedOffers",t.GRAPHQL_GET_GIFT_CARD_PROMOTED_OFFERS="graphql/getGiftCardPromotedOffers",t.GRAPHQL_GET_GIFT_CARD_OFFER="graphql/getGiftCardOffer",t.GRAPHQL_CREATE_GIFT_CARD_ORDER="graphql/createGiftCardOrder",t.GRAPHQL_GET_GIFT_CARD_ORDER_STATUS="graphql/getGiftCardOrderStatus",t.GRAPHQL_GET_USER_GIFT_CARDS="graphql/getUserGiftCards",t.GRAPHQL_GET_USER_GIFT_CARDS_META="graphql/getUserGiftCardsMeta",t.GRAPHQL_GET_USER_GIFT_CARDS_INFINITE="graphql/getUserGiftCardsInfinite",t.GRAPHQL_GET_USER_GIFT_CARD="graphql/getUserGiftCard",t.GRAPHQL_UPDATE_USER_GIFT_CARD_STATUS="graphql/updateUserGiftCardStatus",t.GRAPHQL_GET_USER_GIFT_CARD_CASHBACK_REWARDS="graphql/getUserGiftCardCashbackRewards",t.GRAPHQL_GET_SEEN_IAP_POPUPS="graphql/getSeenIapPopups",t.GRAPHQL_GET_USER_LAST_CLICK_ID="graphql/lastClickId",t.GRAPHQL_GET_OFFER_BUNDLES="graphql/getAllOfferBundles",t.GRAPHQL_GET_UNCLAIMED_OFFER_BUNDLE_REWARDS="graphql/getUnclaimedOfferBundles",t.GRAPHQL_GET_USER_OFFER_BUNDLES="graphql/getUserOfferBundles",t.GRAPHQL_GET_CHARGEBACKS="graphql/getChargebacks",t.GRAPHQL_HAS_CHARGEBACKS="graphql/hasChargebacks",t.GRAPHQL_GET_OFFERS_IN_PROGRESS="graphql/getOffersInProgress",t.GRAPHQL_GET_SUPPORT_TICKETS="graphql/getSupportTickets",t.GRAPHQL_GET_HAS_SUPPORT_TICKETS="graphql/getHasSupportTickets",t.GRAPHQL_GET_OFFER_SUPPORT_TICKET_STATS="graphql/getOfferSupportTicketStats",t.GRAPHQL_GET_RECOMMENDED_OFFERS="graphql/getRecommendedOffers",t.GRAPHQL_SET_PRIVATE_STATUS="graphql/setPrivateStatus",t.GRAPHQL_CHANGE_PROMOTIONAL_EMAILS="graphql/changePromotionalEmails",t.GRAPHQL_CHANGE_EMAIL="graphql/changeEmail",t.REST_CHANGE_USERNAME="rest/changeUsername",t.REST_RESEND_VERIFICATION_EMAIL="rest/resendVerificationEmail",t.GRAPHQL_QUERY_ME_MY_PROFILE="graphql/query/me/myProfile",t.GRAPHQL_GET_GIFTCARDS="graphql/getGiftcards",t.GRAPHQL_GET_HAS_COMPLETED_OFFER="graphql/query/hasCompletedOffer",t.GRAPHQL_GET_CLAIMABLE_USER_AFFILIATE_REWARDS="graphql/query/getClaimableUserAffiliateRewards",t.GRAPHQL_GET_CLAIMED_USER_AFFILIATE_REWARDS="graphql/query/getClaimedUserAffiliateRewards",t.GRAPHQL_GET_STAKE_US_ADDRESS="graphql/query/getStakeUsAddress",t.GRAPHQL_GET_GIFTCARD_CASHOUT_META="graphql/query/getGiftCardCashoutMeta",t.GRAPHQL_GET_STASH_CASHOUT_META="graphql/query/getStashCashoutMeta",t.GRAPHQL_GET_CRYPTO_RATES="graphql/query/getCryptoRates",t.GRAPHQL_CAN_CLAIM_STAKE_FAUCET="graphql/query/canClaimStakeFaucet",t.GRAPHQL_GET_CASHOUT_CONFIG="graphql/query/getCashoutConfig",t.GRAPHQL_GET_STAKE_COM_CASHOUT_META="graphql/query/getStakeComCashoutMeta",t.FC_VERSION_CHECK="freecash_version_check",t.GRAPHQL_GET_STREAK_CONFIGURATION="graphql/getStreakConfiguration",t.GRAPHQL_GET_USER_STREAK="graphql/getUserStreak",t.GRAPHQL_CLAIM_STREAK_REWARD="graphql/claimStreakReward",t.GRAPHQL_PLAYTIME_TRACKED_APPS="graphql/getTrackedAppsProgress",t.GRAPHQL_PLAYTIME_APP_CATALOG="graphql/getTrackedApps",t.GRAPHQL_GET_CURRENT_STREAK_PROGRESS="graphql/getCurrentStreakProgress",t.GRAPHQL_MUTATION_CLAIM_STREAK_REWARD_V2="graphql/mutation/claimStreakRewardV2",t.GRAPHQL_GET_STREAK_FRIENDS="graphql/getStreakFriends",t.GRAPHQL_GET_STREAK_FRIENDS_INVITE_CODE="graphql/getStreakFriendsInviteUrl",t.GRAPHQL_GET_AVAILABLE_STREAK_FRIENDS="graphql/getAvailableStreakFriends",t.GRAPHQL_GET_RECEIVED_STREAK_FRIEND_INVITATIONS="graphql/getReceivedStreakFriendInvitations",t.GRAPHQL_GET_TOP_LEVEL_LADDER_WINNERS="graphql/getTopLevelLadderWinners",t.GRAPHQL_CHANGE_USERNAME="graphql/changeUsername",t.GRAPHQL_GET_BONUS_LADDER_CONFIGURATION="graphql/getBonusLadderConfiguration",t.GRAPHQL_GET_USER_BONUS_LADDER="graphql/getUserBonusLadder",t.GRAPHQL_GET_USER_OFFER_AFFILIATE_REWARDS="graphql/getUserOfferAffiliateRewards",t.GRAPHQL_GET_OFFER_BUNDLE="graphql/getOfferBundle",t.GRAPHQL_GET_CASHOUT_PROVIDERS="graphql/getCashoutProviders",t.CASHOUT_PROVIDER_PRIORITY="cashout/providerPriority",t.GRAPHQL_GET_CRYPTO_COINS="graphql/getCryptoCoins",t.GRAPHQL_HAS_USER_WITHDRAWAL="graphql/hasUserWithdrawal",t.GRAPHQL_QUERY_GET_USER_OFFER_RECOMMENDS="graphql/getUserOfferRecommends",t.GRAPHQL_QUERY_GET_USER_OFFER_RECOMMENDS_OFFERS="graphql/getUserOfferRecommendsOffers",t.GRAPHQL_GET_MAX_IAP_IN_GAME="graphql/getMaxIapInGame",t.GRAPHQL_GET_USER_PROFILE_INFO="graphql/getUserProfileInfo",t.GRAPHQL_GET_ID_VERIFICATION_STATUS="graphql/getIdVerificationStatus",t.GRAPHQL_WORDLE_CAN_PLAY="graphql/wordleCanPlay",t.GRAPHQL_MUTATION_PLAY_WORDLE="graphql/mutation/playWordle",t.GRAPHQL_LATEST_OFFER_ACTIVITY="graphql/latestOfferActivity",t.GRAPHQL_COUNT_BY_WITHDRAWAL_FILTER="graphql/countByWithdrawalFilter",t.GRAPHQL_OFFER_LOTTERY="graphql/offerLottery",t.GRAPHQL_OFFER_LOTTERY_MULTIPLIER="graphql/offerLotteryMultiplier",t.GRAPHQL_OFFER_LOTTERY_BONUS="graphql/offerLotteryBonus",t.GRAPHQL_OFFER_LOTTERY_PREV_WINNERS="graphql/offerLotteryPrevWinners",t.GRAPHQL_OFFER_LOTTERY_WINNER_MODAL="graphql/offerLotteryWinnerModal",t.GRAPHQL_QUARTERLY_LOTTERY="graphql/quarterlyLottery",t.GRAPHQL_QUARTERLY_LOTTERY_PREV_WINNERS="graphql/quarterlyLotteryPrevWinners",t.GRAPHQL_QUARTERLY_LOTTERY_WINNER_MODAL="graphql/quarterlyLotteryWinnerModal",t.GRAPHQL_MY_OFFERS_FOR_LOTTERY="graphql/getMyOffersForLottery",t.GRAPHQL_GET_PERSONALIZED_DEAL="graphql/getPersonalizedDeal",t.GRAPHQL_GET_WORDLE_MINIGAME_CONFIGURATION="graphql/getWordleMinigameConfiguration",t.GRAPHQL_GET_MINIGAMES="graphql/getMinigames",t.GET_LINK_ACCOUNT="graphql/getLinkAccount",t.GRAPHQL_ASSIGN_MINIGAME_TO_USER_OR_GET_PROGRESS="graphql/assignMinigameToUserOrGetProgress",t.GRAPHQL_CLAIM_OFFER_BUNDLE="graphql/claimOfferBundle",t.GRAPHQL_GET_OFFER_SURVEY_QUESTIONS="graphql/getOfferSurveyQuestions",t.GRAPHQL_GET_IS_USING_ISP="graphql/isUsingIsp",t.GRAPHQL_PUSHES_ARE_ON="graphql/pushesAreOn",t.GRAPHQL_GET_PUSH_PROMPT_STATE_MODEL="graphql/getPushPromptStateModel",t.GRAPHQL_OFFER_LEAGUE="graphql/offerLeague",t.GRAPHQL_USER_LEAGUE="graphql/userLeague",t.GRAPHQL_OFFER_LEAGUE_COMPLETED="graphql/offerLeagueCompleted",t.GRAPHQL_GET_INVENTORY_ITEM="graphql/getInventoryItem",t.GRAPHQL_GET_PENDING_USER_MESSAGES="graphql/getPendingUserMessages",t.GRAPHQL_OFFER_LOTTERY_HAS_PARTICIPATED_35K="graphql/offerLotteryHasParticipated35K",t.REST_GET_EXTERNAL_OFFER="rest/getExternalOffer",t.GRAPHQL_GET_POSTBACK_TROUBLESHOOT_REWARD_ELIGIBILITY="graphql/getPostbackTroubleshootRewardEligibility",t.GRAPHQL_PROFILE_ME="graphql/profile/me",t.GRAPHQL_PROFILE_REWARD_HISTORY="graphql/profile/rewardHistory",t.GRAPHQL_PROFILE_PROVIDER_NAMES="graphql/profile/providerNames",t.GRAPHQL_PROFILE_REFERRAL_EARNINGS="graphql/profile/referralEarnings",t.GRAPHQL_PROFILE_AFFILIATE_INFO="graphql/profile/affiliateInfo",t.GRAPHQL_PROFILE_SUPPORT_TICKETS="graphql/profile/supportTickets",t.GRAPHQL_PROFILE_SUPPORT_TICKET_STATS="graphql/profile/supportTicketStats",t);e.s(["QueryKeys",()=>r])},890526,840731,e=>{"use strict";var t=e.i(158081);let r={"\n  query getOfferToLinkAccountV2(\n    $campaignName: String\n    $campaignSource: String\n    $sub1: String\n    $sub2: String\n    $sub3: String\n    $sub4: String\n    $gaid: String\n    $idfa: String\n    $idfv: String\n    $accountId: String\n    $clickId: String\n    $asid: String\n    $adid: String\n    $afid: String\n  ) {\n    getOfferToLinkAccountV2(\n      campaignName: $campaignName\n      campaignSource: $campaignSource\n      sub1: $sub1\n      sub2: $sub2\n      sub3: $sub3\n      sub4: $sub4\n      gaid: $gaid\n      idfa: $idfa\n      idfv: $idfv\n      accountId: $accountId\n      clickId: $clickId\n      asid: $asid\n      adid: $adid\n      afid: $afid\n    ) {\n      id\n      slug\n      name\n      thumbnail\n      isAccountLinked\n      rewardCoins\n    }\n  }\n":t.GetOfferToLinkAccountV2Document,"\n  query GetUserUiSettingsV2 {\n    getUserUiSettingsV2 {\n      state {\n        onboarded\n        skippedAgeGender\n        albumIntroModalSeen\n        onboardingProgressData {\n          answers {\n            gender\n            ageGroup\n            mobileGameFrequency\n            monthlyInAppPurchase\n            earningExpectation\n            playTimeExpectation\n            preferredCashoutMethod\n            smsConsentProvided\n          }\n          phoneNumber\n        }\n        adRewardJourney {\n          mutedUntil\n          dismissHistory {\n            dismissedAt\n            watchedAd\n          }\n        }\n        addToHomeScreenPopupDismissedAt\n        vipCommunityPopupSeen\n      }\n    }\n  }\n":t.GetUserUiSettingsV2Document,"\n  mutation SaveUserUiSettingsV2($settingsInput: UserUiSettingsInput!) {\n    saveUserUiSettingsV2(userUiSettings: $settingsInput) {\n      state {\n        onboarded\n        skippedAgeGender\n        albumIntroModalSeen\n        onboardingProgressData {\n          answers {\n            gender\n            ageGroup\n            mobileGameFrequency\n            monthlyInAppPurchase\n            earningExpectation\n            playTimeExpectation\n            preferredCashoutMethod\n            smsConsentProvided\n          }\n          phoneNumber\n        }\n        adRewardJourney {\n          mutedUntil\n          dismissHistory {\n            dismissedAt\n            watchedAd\n          }\n        }\n        addToHomeScreenPopupDismissedAt\n        vipCommunityPopupSeen\n      }\n    }\n  }\n":t.SaveUserUiSettingsV2Document,"\n  query getUserRewardEntitlements(\n    $label: String\n    $limit: Int!\n    $page: Int!\n    $status: UserRewardEntitlementStatus\n  ) {\n    getUserRewardEntitlements(label: $label, limit: $limit, page: $page, status: $status) {\n      items {\n        id\n        status\n        remainingAmount\n        createdAt\n        availableFrom\n      }\n    }\n  }\n":t.GetUserRewardEntitlementsDocument,"\n  query getBoostCaseTicket {\n    getBoostCaseTicket {\n      canOpenCase\n      cooldownSecondsRemaining\n    }\n  }\n":t.GetBoostCaseTicketDocument,"\n  query getBoostCasePrizes($label: String!) {\n    getBoostCasePrizes(label: $label) {\n      coinPrices\n      label\n    }\n  }\n":t.GetBoostCasePrizesDocument,"\n  mutation openBoostCase {\n    openBoostCase {\n      coinPrices\n      prizeCoins\n      prizeIndex\n      userRewardEntitlementId\n    }\n  }\n":t.OpenBoostCaseDocument,"\n  mutation claimUserRewardEntitlement($id: Int!) {\n    claimUserRewardEntitlement(id: $id, method: USER_REWARD) {\n      id\n      status\n      remainingAmount\n    }\n  }\n":t.ClaimUserRewardEntitlementDocument,"\n  query CashoutEmailsUsed($type: WithdrawType!, $providerName: WithdrawProvider!) {\n    getCashoutEmailsUsed(type: $type, providerName: $providerName) {\n      items\n    }\n  }\n":t.CashoutEmailsUsedDocument,"\n  query RevolutAccountExists($customerName: String!, $revtag: String!) {\n    revolutAccountExists(customerName: $customerName, revtag: $revtag) {\n      exists\n      reason\n    }\n  }\n":t.RevolutAccountExistsDocument,"\n  query RevolutCardAccountExists(\n    $customerName: String!\n    $giftCardId: Float!\n    $address: RevolutCardCashoutAddressArg!\n    $accountNumber: String\n    $iban: String\n    $bic: String\n  ) {\n    revolutCardAccountExists(\n      customerName: $customerName\n      giftCardId: $giftCardId\n      address: $address\n      accountNumber: $accountNumber\n      iban: $iban\n      bic: $bic\n    ) {\n      exists\n      reason\n    }\n  }\n":t.RevolutCardAccountExistsDocument,"\n  query StakeComAccountExists($stakeComUsername: String!) {\n    stakeComAccountExists(stakeComUsername: $stakeComUsername) {\n      exists\n      reason\n    }\n  }\n":t.StakeComAccountExistsDocument,'\n  query findOffersByQuery(\n    $isScheduled: Boolean = true\n    $isChargeback: Boolean = false\n    $sort: String = "dateToRelease"\n    $order: Ordering = ASC\n    $held: Float = 1\n    $limit: Int = 2\n  ) {\n    findOffersByQuery(\n      isScheduled: $isScheduled\n      isChargeback: $isChargeback\n      sort: $sort\n      order: $order\n      held: $held\n      limit: $limit\n    ) {\n      meta {\n        totalAmount\n        totalItemsCount\n      }\n      items {\n        offerName\n        icon\n        dateToRelease\n        dayToRelease\n        coins\n      }\n    }\n  }\n':t.FindOffersByQueryDocument,"\n  query bonusBalanceAndFulfilment {\n    bonusBalanceAndFulfilment {\n      bonusBalance\n      bonusWithdrawableCoins\n    }\n  }\n":t.BonusBalanceAndFulfilmentDocument,"\n    mutation updateUserDefaultStakeProvider($value: StakeProvider!) {\n      updateUserDefaultStakeProvider(stakeProvider: $value)\n    }\n  ":t.UpdateUserDefaultStakeProviderDocument,"\n  query notifications($seen: Int, $limit: Int, $page: Int, $type: String) {\n    notifications(limit: $limit, page: $page, type: $type, seen: $seen) {\n      items {\n        id\n        timestamp\n        gainId\n        category\n        cluster\n        event\n        metadata\n        title\n        message\n        seen\n        type\n      }\n      meta {\n        itemsCount\n        totalItemsCount\n        totalPages\n        itemsPerPage\n        currentPage\n      }\n    }\n  }\n":t.NotificationsDocument,"\n  query notificationsInfo {\n    notificationsInfo {\n      seenCount\n      unseenCount\n      totalCount\n    }\n  }\n":t.NotificationsInfoDocument,"\n    mutation markAllAsRead {\n      markAllAsRead {\n        success\n      }\n    }\n  ":t.MarkAllAsReadDocument,"\n    mutation markAsRead($id: String!) {\n      markAsRead(id: $id) {\n        success\n      }\n    }\n  ":t.MarkAsReadDocument,"\n  query getOfferBundle($id: Float!) {\n    getOfferBundle(id: $id) {\n      status\n      amount\n      minCompleted\n      maxCompletionMinutes\n      id\n      rewardType\n      startedAt\n      completedAt\n      requirements {\n        gameId\n        type\n        value\n        since {\n          mode\n        }\n        earned {\n          mode\n          amountInUsd\n        }\n      }\n      requirementsV2 {\n        requirement {\n          gameId\n          earned {\n            mode\n            amountInUsd\n          }\n          offerTag\n          providerName\n          since {\n            mode\n          }\n          timeLimitation {\n            minutes\n            since {\n              mode\n            }\n          }\n          type\n          value\n        }\n        targetValue\n        type\n      }\n      refreshIntervalMinutes\n      userOfferBundleId\n      numberOfCompletedOfferBundles\n      progress {\n        ... on OfferBundleTaskCompletionProgressObject {\n          completed\n          total\n        }\n      }\n    }\n  }\n":t.GetOfferBundleDocument,"\n  query getUserOfferBundleRequirements($userOfferBundleId: Float!) {\n    getUserOfferBundleRequirements(userOfferBundleId: $userOfferBundleId) {\n      id\n      offerBundleRequirementId\n      userOfferBundleId\n      requirementType\n      status\n      currentValue\n      targetValue\n      valueType\n      completedAt\n      progress {\n        ... on DistinctGamesWithEventsProgressObject {\n          games {\n            gameId\n            leveledUpAt\n          }\n        }\n      }\n    }\n  }\n":t.GetUserOfferBundleRequirementsDocument,"\n  query getOfferById($id: Int, $slug: String, $source: GetOfferSourceInput) {\n    getOffer(id: $id, slug: $slug, source: $source) {\n      category\n      coins\n      description\n      id\n      gameId\n      boost {\n        level\n        multiplier\n      }\n      images {\n        url\n      }\n      videos {\n        url\n      }\n      isAndroid\n      isDesktop\n      isIos\n      enabledInLiteMode\n      name\n      popularity\n      requirements\n      slug\n      tickets\n      showDevices\n      support {\n        status\n        minHoursToReport\n        link\n      }\n      start {\n        completedAt\n        startedAt\n        status\n        deviceType\n        id\n        lastActivity\n        url\n        trackingStatus\n      }\n      status\n      tasks {\n        alwaysDisplay\n        coins\n        id\n        isInstallTask\n        maxCompleteDays\n        offerId\n        priority\n        requirementValue\n        hint\n        tickets\n        status {\n          releaseOn\n          completedAt\n          status\n          completionCount\n          lastCompletionDate\n        }\n        maxCompletions\n        title\n        rewardGroup\n      }\n      thumbnail\n      thumbnailLarge\n      thumbnailPortrait\n      canStart\n      url\n      wallName\n      countries\n      game {\n        id\n        name\n        iosId\n        androidId\n        ratings {\n          android {\n            reviewsCount\n            score\n          }\n          ios {\n            reviewsCount\n            score\n          }\n        }\n      }\n    }\n  }\n":t.GetOfferByIdDocument,"\n  mutation markPopupAsSeen($offerId: Float!) {\n    markPopupAsSeen(offerId: $offerId)\n  }\n":t.MarkPopupAsSeenDocument,"\n  mutation mutateSeenPopupByTaskId($offerTaskId: Float!) {\n    markPopupAsSeen(offerTaskId: $offerTaskId)\n  }\n":t.MutateSeenPopupByTaskIdDocument,"\n  query getStreakBonusSpins {\n    getStreakBonusSpins {\n      times\n      slotId\n    }\n  }\n":t.GetStreakBonusSpinsDocument,"\n  mutation claimStreakBonusSpinReward($slotId: Int!) {\n    claimStreakBonusSpinReward(slotId: $slotId) {\n      slotElement {\n        id\n        name\n        inventoryItemKey\n        inventoryItemAmount\n        weight\n        multiplierType\n      }\n    }\n  }\n":t.ClaimStreakBonusSpinRewardDocument,"\n  query canSeeRewardsBag {\n    canSeeRewardsBag\n  }\n":t.CanSeeRewardsBagDocument,"\n  mutation markRewardsBagAsSeen {\n    markRewardsBagAsSeen\n  }\n":t.MarkRewardsBagAsSeenDocument,"\n  query RewardsRush {\n    rewardsRush {\n      id\n      progress {\n        completionPercentage\n        current {\n          value\n          scale\n          currencyCode\n        }\n        target {\n          value\n          scale\n          currencyCode\n        }\n      }\n      milestones {\n        position\n        status\n        rewardEntitlementId\n        threshold {\n          value\n          scale\n          currencyCode\n        }\n        reward {\n          value\n          scale\n          currencyCode\n        }\n      }\n      totalEarned {\n        value\n        scale\n        currencyCode\n      }\n    }\n  }\n":t.RewardsRushDocument,'\n  query GetRewardsRushHistory($page: Int!, $limit: Int!) {\n    getUserRewardEntitlements(\n      label: "global-ad-revenue-bar"\n      status: FULFILLED\n      page: $page\n      limit: $limit\n    ) {\n      items {\n        id\n        grantedAmount\n        amountScale\n        unitCode\n        createdAt\n        rewardEntitlement {\n          label\n        }\n      }\n      meta {\n        currentPage\n        itemsCount\n        itemsPerPage\n        totalItemsCount\n        totalPages\n      }\n    }\n  }\n':t.GetRewardsRushHistoryDocument,"\n  mutation ClaimRewardsRushMilestone($id: Int!) {\n    claimUserRewardEntitlement(id: $id, method: USER_REWARD) {\n      id\n      status\n      remainingAmount\n    }\n  }\n":t.ClaimRewardsRushMilestoneDocument,"\n  query getEarnFeed($limit: Int = 10, $countryCode: CountryCode = ALL) {\n    findEarnActivityFeed(countryCode: $countryCode, limit: $limit) {\n      items {\n        gainId\n        offername\n        coins\n        bonus\n        date\n        wall\n        username\n        avatar\n        countryCode\n        type\n      }\n    }\n  }\n":t.GetEarnFeedDocument,"\n  query getWithdrawalFeed($limit: Int = 10, $countryCode: CountryCode = ALL) {\n    findWithdrawActivityFeed(countryCode: $countryCode, limit: $limit) {\n      items {\n        gainId\n        withdrawType\n        coins\n        bonus\n        date\n        username\n        type\n        avatar\n        countryCode\n      }\n    }\n  }\n":t.GetWithdrawalFeedDocument,"\n  query getExchangeRatesAndFee($currencyCodes: [Currencies!]! = []) {\n    getExchangeRatesAndFee(currencies: $currencyCodes) {\n      currencyCode\n      dollarRate\n      coinFee\n    }\n  }\n":t.GetExchangeRatesAndFeeDocument,"\n  query getJackpotIsEventActive {\n    jackpotIsEventActive {\n      active\n      reason\n    }\n  }\n":t.GetJackpotIsEventActiveDocument,"\n  query getCurrentUserInfo {\n    me {\n      avatar\n      balance\n      bannedReason\n      datejoined\n      deleted\n      email\n      emailConfirmed\n      freezeReason\n      signupCountry\n      gainId\n      hasLinkedOffer\n      kycVerificationRequired\n      level\n      private\n      mutedReason\n      refBalance\n      pendingAffiliateRewards\n      refcode\n      role\n      totalWithdrawn\n      type\n      unwithdrawableBalance\n      username\n      verified\n      withdrawableSoon\n      xp\n      twoFactorEnabled\n      idVerificationStatus\n      kycVerificationStatus\n      userClass\n      uiMode\n      lastseen\n      completedLiteModeAt\n      uid\n      idVerification {\n        campaignApprovalExpiresAt\n        idVerificationRequired\n        idVerificationProvider\n        idVerificationStarted\n        reason\n      }\n      location {\n        countryCode\n      }\n      tags\n      uiSettings {\n        state {\n          onboarded\n          skippedAgeGender\n          shownWelcomeModals\n          buttonInteractions\n          unlockedAdvancedLiteMode\n          lastViewedNpsPopup\n          lastViewedGooglePlayGiftcardBanner\n          additionalProfilerOnboarded\n          limitedOfferMenuStartedAt\n          payoutOnboardingStatus\n          enabledIosMode\n          popupToCollectPhoneNumbersSeenAt\n          enteredReactivationFlowAt\n          reactivationFlowType\n          dealsOnboardingState {\n            cashbackDialogDismissedAt\n            cashbackDialogCompletedAt\n            cashbackWalkthroughDismissedAt\n            cashbackWalkthroughCompletedAt\n            giftCardsDialogDismissedAt\n            giftCardsDialogCompletedAt\n            giftCardsWalkthroughDismissedAt\n            giftCardsWalkthroughCompletedAt\n            cashbackOnboardingBannerDismissedAt\n            giftCardsOnboardingBannerDismissedAt\n          }\n          cashbackStartOfferPopupState {\n            showCount\n            monthKey\n          }\n          linkOnboardingModalSeen\n        }\n      }\n      hasClickedOffers\n      phoneNumbers {\n        phoneNumber\n      }\n    }\n  }\n":t.GetCurrentUserInfoDocument,"\n  query getMeUid {\n    me {\n      uid\n    }\n  }\n":t.GetMeUidDocument,"\n  query getOfferBundleForUserSSR($id: Float!) {\n    getOfferBundle(id: $id) {\n      status\n      amount\n      minCompleted\n      maxCompletionMinutes\n      id\n      label\n      rewardType\n      startedAt\n      completedAt\n      requirements {\n        gameId\n        type\n        value\n        since {\n          mode\n        }\n        earned {\n          mode\n          amountInUsd\n        }\n      }\n      requirementsV2 {\n        requirement {\n          gameId\n          earned {\n            mode\n            amountInUsd\n          }\n          offerTag\n          providerName\n          since {\n            mode\n          }\n          timeLimitation {\n            minutes\n            since {\n              mode\n            }\n          }\n          type\n          value\n        }\n        targetValue\n        type\n      }\n      refreshIntervalMinutes\n      userOfferBundleId\n      numberOfCompletedOfferBundles\n      progress {\n        ... on OfferBundleTaskCompletionProgressObject {\n          completed\n          total\n        }\n      }\n    }\n  }\n":t.GetOfferBundleForUserSsrDocument,"\n  query getOffer($slug: String, $id: Int, $source: GetOfferSourceInput) {\n    getOffer(slug: $slug, id: $id, source: $source) {\n      category\n      coins\n      description\n      id\n      gameId\n      boost {\n        level\n        multiplier\n      }\n      images {\n        url\n      }\n      videos {\n        url\n      }\n      isAndroid\n      isDesktop\n      isIos\n      enabledInLiteMode\n      name\n      popularity\n      requirements\n      slug\n      start {\n        completedAt\n        startedAt\n        status\n        trackingStatus\n      }\n      status\n      tasks {\n        alwaysDisplay\n        coins\n        id\n        isInstallTask\n        maxCompleteDays\n        offerId\n        priority\n        requirementValue\n        hint\n        status {\n          releaseOn\n          completedAt\n          status\n          completionCount\n          lastCompletionDate\n        }\n        maxCompletions\n        title\n        rewardGroup\n      }\n      support {\n        status\n        link\n        minHoursToReport\n      }\n      thumbnail\n      thumbnailLarge\n      thumbnailPortrait\n      canStart\n      url\n      wallName\n      countries\n      game {\n        id\n        name\n        iosId\n        androidId\n        ratings {\n          android {\n            reviewsCount\n            score\n          }\n          ios {\n            reviewsCount\n            score\n          }\n        }\n      }\n    }\n  }\n":t.GetOfferDocument,"\n  query getOfferId($slug: String, $id: Int, $source: GetOfferSourceInput) {\n    getOffer(slug: $slug, id: $id, source: $source) {\n      id\n    }\n  }\n  ":t.GetOfferIdDocument,"\n  query getSignupSourceInfo {\n    me {\n      signupSource {\n        referrerRefcode\n        campaignName\n        campaignProvider\n        dateJoined\n      }\n    }\n  }\n":t.GetSignupSourceInfoDocument,"\n    query getUserStakeWithdrawalPreferences($currency: Currencies!) {\n      getUserStakeWithdrawalPreferences(currency: $currency) {\n        hasSetStakePreference\n        conversionRate\n        stakePreference\n      }\n    }\n  ":t.GetUserStakeWithdrawalPreferencesDocument,"\n  query GetUserAmplitudeFlags($ignoreCache: Boolean) {\n    getUserAmplitudeFlags(ignoreCache: $ignoreCache) {\n      name\n      value\n      payload\n    }\n  }\n":t.GetUserAmplitudeFlagsDocument,"\n  query getUserConsent {\n    getUserConsent {\n      necessary\n      preferences\n      analytics\n      marketing\n      uncategorized\n    }\n  }\n":t.GetUserConsentDocument,"\n  query GetUserCurrency {\n    getUserCurrency {\n      currency\n      conversionRate\n      availableStaticExchangeRates\n    }\n  }\n":t.GetUserCurrencyDocument,"\n  query GetUserProfile {\n    getUserProfile {\n      gender\n      ageGroup\n      emailConsentProvided\n      smsConsentProvided\n      doubleOptInProvided\n      pushNotificationConsentProvided\n      canRefer\n      canSendVerificationMarketingEmail\n      monthlyInAppPurchase\n      mobileGameFrequency\n      language\n      earningExpectation\n      playTimeExpectation\n      preferredCashoutMethod\n      preferredGameGenres\n      gainId\n      stakeUsUsername\n    }\n  }\n":t.GetUserProfileDocument,"\n  query getWallsForUser($isSurveysPage: Boolean) {\n    getWallsForUser(isSurveysPage: $isSurveysPage) {\n      wallName\n      slug\n      logo\n      shouldOpenInNewTab\n      openOwnWallPage\n      disabled\n      disabledMessage\n      type\n      popularity\n      bonus\n    }\n  }\n":t.GetWallsForUserDocument,"\n  query getProfileMe {\n    me {\n      gainId\n      username\n      avatar\n      email\n      emailConfirmed\n      datejoined\n      level\n      completedOffersCount\n      totalIncome\n      referrerId\n      private\n      promoEmailsOn\n      twoFactorEnabled\n      refcode\n      balance\n      signupCountry\n      tags\n      location {\n        countryCode\n      }\n    }\n  }\n":t.GetProfileMeDocument,"\n  query getProfileRewardHistory($page: Int, $limit: Int) {\n    getOfferTaskCompletions(page: $page, limit: $limit) {\n      items {\n        id\n        coins\n        isHeld\n        name\n        completedAt\n        isChargebacked\n        offer {\n          id\n          name\n          coins\n          thumbnail\n          wallName\n          slug\n          status\n          category\n        }\n      }\n      meta {\n        itemsCount\n        totalPages\n        currentPage\n      }\n    }\n  }\n":t.GetProfileRewardHistoryDocument,"\n  query getProfileProviderNames($type: OfferCompleteTypeEnum!) {\n    getCompletedOffersProviderNames(type: $type)\n  }\n":t.GetProfileProviderNamesDocument,"\n  query getProfileReferralEarnings($page: Int, $limit: Int, $sort: Int!) {\n    referralEarnings(page: $page, limit: $limit, sort: $sort) {\n      items {\n        gainId\n        username\n        avatar\n        registeredAt\n        completedFirstOfferRewardCoins\n        firstCashoutRewardCoins\n        refCoins\n        coins\n        completedOffers\n      }\n      meta {\n        currentPage\n        itemsCount\n        itemsPerPage\n        totalItemsCount\n        totalPages\n      }\n    }\n  }\n":t.GetProfileReferralEarningsDocument,"\n  query getProfileAffiliateInfo {\n    userAffiliateInfo {\n      tier\n      totalEarning\n      pendingEarnings\n    }\n  }\n":t.GetProfileAffiliateInfoDocument,"\n  query getProfileSupportTickets($page: Int, $limit: Int) {\n    getSupportTickets(page: $page, limit: $limit) {\n      items {\n        gainId\n        offerId\n        offerName\n        offerImage\n        wallName\n        clickId\n        country\n        createdAt\n        multiTaskTicketStatus\n        totalCoins\n        tickets {\n          id\n          status\n          createdAt\n          updatedAt\n          taskReward\n          taskTitle\n        }\n      }\n      meta {\n        currentPage\n        itemsCount\n        itemsPerPage\n        totalItemsCount\n        totalPages\n      }\n    }\n  }\n":t.GetProfileSupportTicketsDocument,"\n  query getProfileSupportTicketStats {\n    getOfferSupportTicketStats {\n      total\n      open\n      closed\n    }\n  }\n":t.GetProfileSupportTicketStatsDocument,"\n  mutation changeProfileUsername($username: String!) {\n    changeUsername(username: $username) {\n      message\n    }\n  }\n":t.ChangeProfileUsernameDocument,"\n  mutation changeProfilePrivateStatus($isPrivate: Boolean!) {\n    changePrivateStatus(isPrivate: $isPrivate) {\n      message\n    }\n  }\n":t.ChangeProfilePrivateStatusDocument,"\n  mutation changeProfilePromoEmailStatus($promoEmailsOn: Boolean!) {\n    changePromoEmailStatus(promoEmailsOn: $promoEmailsOn) {\n      message\n    }\n  }\n":t.ChangeProfilePromoEmailStatusDocument,"\n  mutation changeProfileReferralCode($code: String!) {\n    changeReferralCode(code: $code) {\n      message\n    }\n  }\n":t.ChangeProfileReferralCodeDocument,"\n  mutation reSendUserChallenge($type: UserChallengeType!) {\n    reSendUserChallenge(type: $type) {\n      type\n      expiresAt\n    }\n  }\n":t.ReSendUserChallengeDocument,"\n  mutation sendUserChallenge($type: UserChallengeType!) {\n    sendUserChallenge(type: $type) {\n      type\n      expiresAt\n    }\n  }\n":t.SendUserChallengeDocument,"\n  mutation startOfferBundle($offerBundleId: Int!) {\n    startOfferBundle(offerBundleId: $offerBundleId) {\n      offerBundleId\n    }\n  }\n":t.StartOfferBundleDocument,"\n  mutation StartOffer($offerId: Int!, $offerPosition: Int, $source: OfferClickSource, $isClickedWithoutOpen: Boolean, $feedId: ID) {\n    startOffer(\n      offerId: $offerId\n      offerPosition: $offerPosition\n      source: $source\n      isClickedWithoutOpen: $isClickedWithoutOpen\n      feedId: $feedId\n    ) {\n      url\n      destination\n    }\n  }\n":t.StartOfferDocument,"\n  mutation StartVerification($options: TriggerVerificationOptionsInput!) {\n    startVerification(options: $options) {\n      url\n    }\n  }\n":t.StartVerificationDocument,"\n  mutation verifyUserChallenge($type: UserChallengeType!, $code: String!) {\n    verifyUserChallenge(type: $type, loginEmail2fa: { code: $code })\n  }\n":t.VerifyUserChallengeDocument,"\n  query getGeoInfo {\n    getGeoInfo {\n      countryCode\n      ip\n      city\n      region\n    }\n  }\n":t.GetGeoInfoDocument,"\n  query getOffersInfoByCountry {\n    getOffersInfoByCountry {\n      availableOffersCount\n      offers {\n        offerMaxCoins\n        highestOfferName\n      }\n    }\n  }\n":t.GetOffersInfoByCountryDocument,"\n  query getOffersInfoByCountryV2 {\n    getOffersInfoByCountryV2 {\n      availableOffersCount\n      offerMaxCoins\n    }\n  }\n":t.GetOffersInfoByCountryV2Document,"\n  query getSiteStatsInfo {\n    avgEarnedYesterday: getSiteStatsInfo(type: AVG_EARNED_YESTERDAY)\n    coinsEarnedTotal: getSiteStatsInfo(type: COINS_EARNED_TOTAL)\n    totalSignUps24h: getSiteStatsInfo(type: USERS_REGISTERED_LAST_24H)\n  }\n":t.GetSiteStatsInfoDocument,"\n  query canClaimStakeFaucet {\n    canClaimStakeFaucet {\n      stakeUs\n      stakeCom\n    }\n  }\n":t.CanClaimStakeFaucetDocument,"\n  query GetUserUiSettingsV2Server {\n    getUserUiSettingsV2 {\n      state {\n        onboarded\n        skippedAgeGender\n        albumIntroModalSeen\n        onboardingProgressData {\n          answers {\n            gender\n            ageGroup\n            mobileGameFrequency\n            monthlyInAppPurchase\n            earningExpectation\n            playTimeExpectation\n            preferredCashoutMethod\n            smsConsentProvided\n          }\n          phoneNumber\n        }\n      }\n    }\n  }\n":t.GetUserUiSettingsV2ServerDocument,"\n  mutation accessWall($slug: String!) {\n    accessWall(slug: $slug) {\n      url\n      shouldDisplayInIframe\n    }\n  }\n":t.AccessWallDocument};e.s(["graphql",0,function(e){return r[e]??{}}],840731),e.s([],890526)},839885,298080,e=>{"use strict";var t=e.i(645141);let r=["banControl.banned","banControl.frozen","banControl.muted","Daily game variant not found","Lottery is not started yet","Lottery is not completed yet","Offer not found","Please wait a few seconds before attempting this action again.","Please wait a few seconds before trying again.","Streak reward expired","User offer task not claimable","Streak reward already claimed","Streak reward is frozen","Friend streak is not currently claimable","No active friend streak with this user","Friend Streak invite limit reached","Cannot invite yourself to a friend streak","An active friend streak between these users already exists","Cannot invite this user to a friend streak","You have already nudged this friend today","No pending friend streak invitation found","FriendStreakSlotUnavailable","Cannot start a streak with yourself","Invalid invite code","Inviter does not have friend streaks enabled","You have already claimed today's friend streak reward","No user streak progress found","No streak bonus spin was rewarded for the current streak progress day","No streak bonus spin available for the user","Collecting new cards is already in progress, please wait a moment and try again","Maximum open tickets limit per offer reached","You have already claimed your reward","Invalid verification code","No new cards to collect","Ticket already exists for this offer task","Selling duplicate cards is already in progress, please wait a moment and try again","No duplicate cards to sell","Ticket already exists for this offer completion","Ticket already exists for this offer click","User has no available streak to claim","Maximum open tickets limit reached","Please wait before requesting a new challenge.","You have used all attempts to verify the 2FA","App usage tracking is not enabled for this user","Unknown game","Verification email already sent. Please try again later.","Resource is locked, try again later","Account deleted.","Account not found.","Sorry, we could not retrieve your email from Facebook.","Another user is already logged in.","Incorrect email or password.","Invalid 2FA verification code","Invalid OTP token","No OTP token found","Token is required for mobile QR login","Too many failed login attempts, please contact support.","User email not found!","Verification code expired","request failed. please enable cookies.","Something went wrong!","Unauthorized","You are not Authenticated."],n=["Internal Server Error","Bad Request Exception","You do not have access to this resource.","Streak reward wrong slot"];e.s(["ignoredBackendMessages",0,n,"rawBackendMessages",0,r],298080);let a=new Set(r.map(o)),i=new Set(n.map(o)),s=new Set;function o(e){return e.replace(/ +([a-zA-Z])/g,(e,t)=>t.toUpperCase()).replace(/ +/g,"").replace(/[^a-zA-Z0-9]+/g,"_").replace(/^_+|_+$/g,"").replace(/(^|_)([A-Z])/g,(e,t,r)=>t+r.toLowerCase())}e.s(["slugifyBackendMessage",0,o,"translateBackendMessage",0,function(e){if("string"!=typeof e||!e)return e??"";let r=o(e);if(!r||i.has(r))return e;let n=`_common-logged:backendMessages.${r}`;return!t.default.exists(n)&&(a.has(r)||s.add(e)),t.default.t(n,{defaultValue:e})},"untranslatedBackendMessages",0,s],839885)},17578,e=>{"use strict";let t=(e,t=500)=>new Promise(r=>{setTimeout(()=>r(e),t)});function r(e){let t=new FormData;return Object.keys(e).forEach(r=>{let n=e[r],a=n,i=a instanceof Blob;(Array.isArray(a)||"object"==typeof a&&null!==a&&!i)&&(a=JSON.stringify(n)),t.append(String(r),a)}),t}class n{resourceName;mockData;options;perPage;app;constructor(e,n=[],a={}){this.resourceName=e,this.mockData=n,this.options=a,this.get=async e=>this.callGet(`${e}`),this.create=async e=>await t(e),this.patch=async(e,t,n="json")=>{let a;if(!this.app)throw Error("App is not defined");return a="json"===n?JSON.stringify(t):r(t),this.app.patch(this.getUrl(`/${e}`),a)},this.getAll=async()=>t({data:this.mockData,total:this.mockData.length}),this._getAll=async()=>{if(!this.app)throw Error("App is not defined");return this.app.get(this.getUrl(""))},this.remove=async e=>{if(!this.app)throw Error("App is not defined");return this.app.delete(this.getUrl(e?`/${e}`:""))},this.find=async e=>{let{page:r,perPage:n,...a}=this.getQuery(e),i=[...this.mockData];return Object.keys(a).forEach(e=>{let t=a[e];i=i.filter(r=>r[e]===t)}),t({data:i.slice((r-1)*n,r*n),total:i.length})},this.getPage=async(e,t={})=>this.find({page:e,...t}),this._find=async e=>{if(!this.app)throw Error("App is not defined");let{_url:t,...r}=e,n=t?`/${t}`:"";return this.app.get(this.getUrl(`${n}${this.getQueryUrl(r)}`))},this.perPage=a.perPage||10,this.app=a.app}toQueryString(e){let t=new URLSearchParams;return Object.keys(e).forEach(r=>{t.append(r,e[r])}),t.toString()}getUrl(e){return`/${this.resourceName}${e}`}getQuery(e){return{perPage:this.perPage,...e}}getServerQuery(e){let{page:t,perPage:r,limit:n=r||this.perPage,...a}=e;return{...a,page:t,limit:n}}getQueryUrl(e){let t="page"in e?this.getServerQuery(e):e,r=Object.keys(t);return r.length>0?`?${r.map(e=>`${String(e)}=${t[e]}`).join("&")}`:""}get;callGet(e){if(!this.app)throw Error("App is not defined");return this.app.get(this.getUrl(`/${e}`))}callPut(e,t){if(!this.app)throw Error("App is not defined");let r=JSON.stringify(t);return this.app.put(this.getUrl(`/${e}`),r)}create;patch;getAll;_getAll;remove;find;getPage;_find;_create(e,t="json"){let n;if(!this.app)throw Error("App is not defined");let{url:a,...i}=e;return n="json"===t?JSON.stringify(i):r(i),this.app.post(this.getUrl(a||""),n)}update(e,t,n="json"){let a;if(!this.app)throw Error("App is not defined");return a="json"===n?JSON.stringify(t):r(t),this.app.put(this.getUrl(`/${e}`),a)}}e.s(["default",()=>n])},91917,e=>{"use strict";e.i(181944),e.s([])},708102,e=>{"use strict";e.s(["REQ_SESSION_ID_KEY",0,"Req-Session-Id"])},773544,422233,254425,176829,986872,708921,74360,e=>{"use strict";let t;e.i(17578),e.i(91917);var r=e.i(181944),n=e.i(12606),a=e.i(708102),i=e.i(938461),s=e.i(764380),o=e.i(87253),u=e.i(839885),l=e.i(645141);let d="u">typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),c=new Uint8Array(16),p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).slice(1));let g=function(e,r,n){if(d&&!r&&!e)return d();let a=(e=e||{}).random||(e.rng||function(){if(!t&&!(t="u">typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(c)})();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,r){n=n||0;for(let e=0;e<16;++e)r[n+e]=a[e];return r}return function(e,t=0){return p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]}(a)};e.s(["v4",0,g],422233);let f=[[/[^\s"'<>]+@[^\s"'<>]+\.[a-z]{2,}/gi,"{email}"],[/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi,"{uuid}"],[/\bhttps?:\/\/\S+/gi,"{url}"],[/\b[0-9a-f]{16,}\b/gi,"{hash}"],[/\b\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2})?\S*)?/g,"{date}"],[/\b\d[\d.,]*\b/g,"{n}"]];function h(e){let t=f.reduce((e,[t,r])=>e.replace(t,r),e).replace(/\s+/g," ").trim();return t.length>120?`${t.slice(0,120)}…`:t}let m=["Offer feed is no longer usable","Offer feed does not belong"],y=[{message:"survey not found",path:"surveyAnswerAdditionalQuestion"},{message:"No active friend streak with this user",path:"nudgeStreakFriend"},{message:"you have already passed this survey",path:"internalSurvey"},{message:"Social Media Quest is not enabled for user",path:"claimFollowSocialReward"},{message:"can not claim offer bundle",path:"claimOfferBundle"},{message:"You have already claimed the follow social reward",path:"claimFollowSocialReward"},{message:"invalid email",path:"internalSurveyAnswerQuestion"}],_=0,A=e=>Array.isArray(e)?e.map(e=>"string"==typeof e?e:e?.message??"Unknown error"):[e||"Unknown error"];class S{baseURL;showInternalErrors;token;cache;constructor(e,t){this.baseURL=e,this.showInternalErrors=t,this.token=null,this.cache=new Map}setToken(e){this.token=e}get headers(){let e={};return this.token&&(e.Authorization=`Bearer ${this.token}`),e}preloadImage(e){return new Promise(t=>{let r=new Image;r.onload=()=>t(),r.src=e})}async fetch(e,t={}){let r=await this.send(e,t);return this.processResponse({status:r.status,ok:r.ok,contentType:r.headers.get("Content-Type"),resUuid:r.headers.get("res-uuid"),text:await r.text()},t.body)}send(e,t={}){let{headers:i={},credentials:s="include",...o}=t,{body:u}=o,d={...this.headers};"string"==typeof u&&(d["Content-Type"]="application/json");let c=(0,r.getSessionStorage)(a.REQ_SESSION_ID_KEY);return c||(c=g(),(0,r.setSessionStorage)(a.REQ_SESSION_ID_KEY,c)),(0,n.fetchWithAuthRefresh)(`${this.baseURL}${e}`,{...o,headers:{[a.REQ_SESSION_ID_KEY]:c,...d,...i,"X-Locale":l.default.resolvedLanguage??"en"},credentials:s})}processResponse(e,t){let{dataResponse:r,responseText:n}=function(e){if(!(e.contentType??"").includes("application/json"))return{dataResponse:null,responseText:e.text};let t=JSON.parse(e.text);return t&&"object"==typeof t&&e.resUuid&&(t.apiResUuid=e.resUuid),{dataResponse:t,responseText:null}}(e),a=function(e,t,r){let n=e?.errors;if(!e||!Array.isArray(n)||0===n.length)return null;let a=A(n);return!function(e,t,r){let{errors:n}=e,a=A(n),s=a.filter(e=>m.some(t=>e.startsWith(t))),o=Array.isArray(n)?n.map(e=>"string"==typeof e?null:e?.path??null):[null],u=(e,t)=>y.some(r=>e.startsWith(r.message)&&o[t]?.[0]===r.path),l=a.filter(u);if(a=a.filter((e,t)=>!1===(0,i.isIgnoredApiError)(e)&&!1===m.some(t=>e.startsWith(t))&&!1===u(e,t)),window.Sentry&&window.Sentry.captureException&&s.length>0&&.1>Math.random()&&window.Sentry.captureException(Error("Expected offer-feed rejection (sampled 10%)"),{level:"warning",fingerprint:["expected-offer-feed-rejection"],extra:{errorMessages:JSON.stringify(s),body:"string"==typeof r?r:null,sampleRate:.1}}),window.Sentry&&window.Sentry.captureException&&l.length>0&&.05>Math.random()&&window.Sentry.captureException(Error("Expected operation rejection (sampled 5%)"),{level:"warning",fingerprint:["expected-operation-rejection",l[0]],extra:{errorMessages:JSON.stringify(l),body:"string"==typeof r?r:null,sampleRate:.05}}),window.Sentry&&window.Sentry.captureException&&a.length>0&&400!==t.status){let e=Array.isArray(n)&&n[0]?n[0].path:null,t=h(a[0]),i=!1===Array.isArray(e)||0===e.length?null:e.map(e=>"number"==typeof e||/^\d+$/.test(String(e))?"{n}":String(e)).join(","),s=`Request${i?` ${i}`:""} failed with errors: ${t}`;window.Sentry.captureException(Error(s),{fingerprint:[`Request${i?` ${i}`:""} failed with errors`,t],tags:{"graphql.error_message":t,...e?{"graphql.path":String(e)}:{}},extra:{errorMessages:JSON.stringify(a),body:"string"==typeof r?r:null,errors:JSON.stringify(Array.isArray(n)?n.map(e=>({path:"string"==typeof e?[]:e.path,message:"string"==typeof e?e:e.message,locations:"string"==typeof e?[]:e.locations})):n)}})}}(e,t,r),n.forEach((e,t)=>{"string"==typeof e?n[t]=(0,u.translateBackendMessage)(e):e.message&&(e.message=(0,u.translateBackendMessage)(e.message))}),a}(r,e,t);return e.ok||this.rejectFailedResponse(e,r,n,a,t),r}rejectFailedResponse(e,t,r,n,a){let i=(0,o.getQueryName)(a);if(i&&e.status>=400){let t=null!==r&&(r.includes("_cf_chl_opt")||r.includes("cdn-cgi/challenge-platform"));((e,t,r,n,a)=>{if((431!==e||!((_+=1)>1))&&window.Sentry&&window.Sentry.captureException){let i,o=`Request ${t} failed with status ${e}${n?" (Cloudflare challenge)":""}`,u=a?.filter(Boolean)??[];window.Sentry.captureException(Error(o),{fingerprint:["request-failed-with-status",String(e),n?"cloudflare-challenge":"plain"],tags:{"http.status_code":String(e),"http.operation":t,...n?{"http.cloudflare_challenge":"true"}:{},...u.length>0?{"graphql.error_message":h(u[0])}:{}},extra:{body:r?function(e){if(!e)return null;if("string"==typeof e){let t=e.length>5e3?e.slice(0,5e3)+"…[truncated]":e;return`String(${Math.min(e.length,5e3)}): ${t}`}if(e instanceof FormData){let t=Array.from(e.keys());return`FormData keys: ${t.join(",")}`}if(e instanceof URLSearchParams){let t=Array.from(e.keys());return`URLSearchParams keys: ${Array.from(new Set(t)).join(",")}`}return e instanceof Blob?`[Binary Blob${e.type?`: ${e.type}`:""}]`:e instanceof ArrayBuffer||"u">typeof ArrayBuffer&&ArrayBuffer.isView(e)?"[Binary Data]":"function"==typeof e?.getReader?"[ReadableStream]":"[Unknown Body Type]"}(r):"[Empty]",...431===e?function(){try{let e=(0,s.getCookieNames)();return{cookieBytes:new TextEncoder().encode(document.cookie).byteLength,cookieCount:e.length,cookieNames:e.join(",")}}catch{return{cookieBytes:-1,cookieCount:-1,cookieNames:"[unavailable]"}}}():{},...u.length>0?{serverMessages:(i=JSON.stringify(u.slice(0,5))).length>500?`${i.slice(0,500)}…[truncated]`:i}:{}}})}})(e.status,i,a,t,n)}if(null===t)throw Error("Request failed");let{errors:u}=t;if(this.showInternalErrors&&u&&u.length>0)throw Error(Array.isArray(u)?u[0].toString():u);throw Error(t.message||"Request failed")}async get(e,t={}){return this.fetch(e,{method:"GET",...t})}async post(e,t,r={}){return this.fetch(e,{method:"POST",body:t,...r})}async patch(e,t,r={}){return this.fetch(e,{method:"PATCH",body:t,...r})}async put(e,t,r={}){return this.fetch(e,{method:"PUT",body:t,...r})}async delete(e,t={}){return this.fetch(e,{method:"DELETE",...t})}}class E{app;constructor(e,t=!1){this.app=new S(e,t)}}e.s([],773544),e.s(["BaseApi",()=>E],254425);var C=e.i(657813),R=e.i(128093),I=e.i(262947);class T{app;endpoint;constructor(e={},t="/fc-api/graphql"){this.app=e.app,this.endpoint=t}async request(e,t,r){if(!this.app)throw Error("App is not defined");let a=this.app,i=await (0,I.executeGraphQL)({document:e,variables:t,transport:{send:({body:e})=>a.send(this.endpoint,{method:"POST",body:e,...r?.headers&&r.headers.Authorization?{headers:{...a.headers,Authorization:r.headers.Authorization}}:{},...r?.credentials&&{credentials:r.credentials}})}});if(!i.ok&&"network"===i.failure.kind)throw i.failure.error;let s=JSON.stringify({query:e,variables:t}),{meta:u}=i,l=a.processResponse({status:u.status,ok:u.ok,contentType:u.contentType,resUuid:u.resUuid,text:u.responseText??""},s);if((0,C.isUnauthorizedResponse)(l)){let e=(0,o.getQueryName)(s)??"unknown";throw(0,R.checkUserIsLoggedIn)()&&(0,n.forceLogout)(e),new C.UnauthorizedGraphQLError(l)}return l}async requestOnce(e,t,r){let n=this.app;if(!n)throw Error("App is not defined");let a=JSON.stringify(e),i=n.cache.get(a);if(i)return i;let s=this.request(t,r).then(e=>(n.cache.set(a,e),e)).catch(e=>{throw n.cache.delete(a),e});return n.cache.set(a,s),s}}e.s(["default",()=>T],176829);class O{graphql;constructor(e){this.graphql=e}createSession(){return this.graphql.request(`
      mutation {
        kycCreateSession {
          sessionToken
          errorMessage
        }
      }
    `)}checkAccount(){return this.graphql.request(`
      query {
        kycCheckAccount {
          success
        }
      }
    `)}}e.s(["default",()=>O],986872);class P{graphql;constructor(e){this.graphql=e}getInventoryItem(e){return this.graphql.request(`
      query($key: String!) {
        getInventoryItem(key: $key) {
          amount
          displayName
          key
        }
      }
    `,e)}getQuestStepClaimsTotalReward(e){return this.graphql.request(`
      query getQuestStepClaimsTotalReward($startDate: DateTime!) {
        getQuestStepClaimsTotalReward(startDate: $startDate)
      }
    `,{startDate:e})}getQuests(e,t){return this.graphql.request(`
      fragment QuestFields on Quest {
        id
        name
        requiredInventoryItemKey
        isInstantReward
        steps {
          id
          requiredInventoryItemCount
          reward
          claim {
            claimsCount
            id
            user {
              gainId
              username
              avatar
            }
          }
          level
          isReclaimable
        }
        requiredInventoryItem {
          key
          displayName
          amount
        }
      }

      query {
        getQuests(page: ${e}, limit: ${t}) {
          items {
            ...QuestFields
          }
          meta {
            currentPage
            itemsCount
            itemsPerPage
            totalItemsCount
            totalPages
          }
        }
      }`)}spin({slotId:e,multiplier:t=1}){return this.graphql.request(`
      mutation {
        spin(slotId: ${e}, multiplier: ${{1:"X1",3:"X3",5:"X5",20:"X20"}[t]||"X1"}) {
          id
          inventoryItemKey
          multiplierType
          weight
        }
      }
    `)}claimQuestStepCoinReward(e){return this.graphql.request(`
      mutation {
        claimQuestStepCoinReward(questStepId: ${e}) {
          id
          questStep {
            id
            claim {
              claimsCount
              id
            }
            reward
          }
        }
      }
    `)}claimQuestStepStakeReward(e,t,r){return this.graphql.request(`
      mutation {
        claimQuestStepStakeReward(questStepId: ${e}, stakeProvider: ${t}, stakeUsername: "${r}") {
          id
          questStep {
            id
            claim {
              claimsCount
              id
              user {
                gainId
                username
                avatar
              }
            }
            reward
          }
        }
      }
    `)}getWeekTopQuestStepClaims(){return this.graphql.request(`
      query {
        getWeekTopQuestStepClaims {
          questStep {
            claim {
              claimsCount
              id
              user {
                gainId
                username
                avatar
              }
            }
            id
            isReclaimable
            level
            quest {
              id
              name
              requiredInventoryItemKey
              requiredInventoryItem {
                amount
                displayName
                key
              }
            }
            requiredInventoryItemCount
            reward
          }
          user {
            avatar
            gainId
            username
          }
        }
      }
    `)}}e.s(["default",()=>P],708921);var $=e.i(158081);let G=`
  code
  metadata {
    earnedCoins
    cashoutVoucherKey
    maxHourlyWithdrawalsCount
    maxWithdrawableCoins
    minEarnedToWithdraw
    minWithdrawableCoins
    minimumWithdrawalCoins
    remainingAmountToEarn
    unwithdrawableBalance
    withdrawableNowCoins
  }
`;class q{graphql;constructor(e){this.graphql=e}getUserStakeWithdrawalPreferences(e){return this.graphql.request(`
      query {
        getUserStakeWithdrawalPreferences(currency: ${e}) {
          hasSetStakePreference
          conversionRate
          stakePreference
        }
      }
    `)}getCashoutConfig(){return this.graphql.request(`
      query {
        getCashoutConfig {
          excludedCountries {
            paypal
            visa
          }
          stakeBonus
          stakeUSBonus
          countriesByCode {
            country
            code
          }
        }
      }
    `)}getGiftCardCashoutMeta(){return this.graphql.request(`
      query {
        getGiftCardCashoutMeta {
          brand
          default {
            coins
            displayValues
          }
          countries
          currencies {
            countryCode
            coins
            displayValues
          }
        }
      }
    `)}getStashCashoutMeta(){return this.graphql.request(`
      query {
        getStashCashoutMeta {
          minimumCashoutAmount
        }
      }
    `)}getStakeComCashoutMeta(){return this.graphql.request(`
      query {
        getStakeComCashoutMeta {
          currencies {
            currency
            minimumCashoutAmount
          }
        }
      }
    `)}stashCashout(e){return this.graphql.request(`
      mutation StashCashout($accountNumber: String!, $customerName: String!, $currency: String!, $coinsAmount: Int!, $address: RevolutUsCashoutAddressArg!) {
        stashCashout(
          accountNumber: $accountNumber
          customerName: $customerName
          currency: $currency
          coinsAmount: $coinsAmount
          address: $address
        ) {
            __typename
            ... on CashoutInitiatedResponseObject {
              id
            }
            ... on CashoutInitiationErrorObject {
              ${G}
            }
          }
      }`,e)}canClaimStakeFaucet(){return this.graphql.request(`
      query {
        canClaimStakeFaucet {
          stakeUs
          stakeCom
        }
      }
    `)}stakeUsFaucetCashout(e){return this.graphql.request(`
      mutation stakeUsFaucetCashout($username: String!) {
        stakeUsFaucetCashout(
          username: $username
        ) {
          __typename
          ... on CashoutInitiatedResponseObject {
            id
          }
          ... on CashoutInitiationErrorObject {
            code
            metadata {
              minEarnedToWithdraw
              minWithdrawableCoins
              minimumWithdrawalCoins
              remainingAmountToEarn
              unwithdrawableBalance
              withdrawableNowCoins
            }
          }
        }
      }`,e)}stakeComFaucetCashout(e){return this.graphql.request(`
      mutation stakeComFaucetCashout($username: String!) {
        stakeComFaucetCashout(
          username: $username
        ) {
          __typename
          ... on CashoutInitiatedResponseObject {
            id
          }
          ... on CashoutInitiationErrorObject {
            code
            metadata {
              minEarnedToWithdraw
              minWithdrawableCoins
              minimumWithdrawalCoins
              remainingAmountToEarn
              unwithdrawableBalance
              withdrawableNowCoins
            }
          }
        }
      }`,e)}getWaxpeerListings(){return this.graphql.request(`
      query {
        getWaxpeerListings {
          item_id
          brand
          image
          price
          name
          float
          steam_price
          type
          best_deals
          discount
          shortExterior
          namePartOne
          namePartTwo
          siteDollarPrice
          siteCoinPrice
          color {
            hex
            rgb
          }
        }
      }
    `)}updateUserDefaultStakeProvider(e){return this.graphql.request(`
      mutation {
        updateUserDefaultStakeProvider(stakeProvider: ${e})
      }
    `)}revolutCashout(e){return this.graphql.request(`
      mutation RevolutCashout($customerName: String!, $revtag: String!, $currency: RevolutAllowedCurrencies!, $coinsAmount: Int!) {
        revolutCashout(
          customerName: $customerName
          revtag: $revtag
          currency: $currency
          coinsAmount: $coinsAmount
        ) {
          __typename
          ... on CashoutInitiatedResponseObject {
            id
          }
          ... on CashoutInitiationErrorObject {
            ${G}
          }
        }
      }
    `,e)}revolutUsCashout(e){return this.graphql.request(`
      mutation RevolutUsCashout($routingTransitNumber: String!, $accountNumber: String!, $customerName: String!, $giftCardId: Float!, $address: RevolutUsCashoutAddressArg!) {
        revolutUsCashout(
          routingTransitNumber: $routingTransitNumber
          accountNumber: $accountNumber
          customerName: $customerName
          giftCardId: $giftCardId
          address: $address
        ) {
            __typename
            ... on CashoutInitiatedResponseObject {
              id
            }
            ... on CashoutInitiationErrorObject {
              ${G}
            }
          }
      }`,e)}revolutCardCashout(e){return this.graphql.request(`
      mutation RevolutCardCashout($accountNumber: String, $bic: String, $iban: String, $customerName: String!, $giftCardId: Float!, $address: RevolutCardCashoutAddressArg!) {
        revolutCardCashout(
          accountNumber: $accountNumber
          bic: $bic
          iban: $iban
          customerName: $customerName
          giftCardId: $giftCardId
          address: $address
        ) {
            __typename
            ... on CashoutInitiatedResponseObject {
              id
            }
            ... on CashoutInitiationErrorObject {
              ${G}
            }
          }
      }`,e)}stakeComCashout(e){return this.graphql.request(`
      mutation StakeComCashout($username: String!, $currency: Currencies!, $coinsAmount: Int!) {
        stakeComCashout(
          username: $username
          currency: $currency
          coinsAmount: $coinsAmount
        ) {
          __typename
          ... on CashoutInitiatedResponseObject {
            id
          }
          ... on CashoutInitiationErrorObject {
            ${G}
          }
        }
      }
    `,e)}stakeUsCashout(e){return this.graphql.request(`
      mutation StakeUsCashout($username: String!, $currency: Currencies!, $coinsAmount: Int!) {
        stakeUsCashout(
          username: $username
          currency: $currency
          coinsAmount: $coinsAmount
       ) {
          __typename
          ... on CashoutInitiatedResponseObject {
            id
          }
          ... on CashoutInitiationErrorObject {
            ${G}
          }
        }
      }
    `,e)}cryptoCashout(e){return this.graphql.request(`
      mutation CryptoCashout($cryptoCoinId: Float!, $amount: Float!, $address: String!) {
        cryptoCashout(
          cryptoCoinId: $cryptoCoinId
          address: $address
          amount: $amount
        ) {
          __typename
          ... on CashoutInitiatedResponseObject {
            id
          }
          ... on CashoutInitiationErrorObject {
            ${G}
          }
        }
      }
    `,e)}getCryptoCoins(e){return this.graphql.request(`
      query GetCryptoCoins($page: Int, $limit: Int) {
        getCryptoCoins(
          page: $page
          limit: $limit
        ) {
          items {
            id
            name
            localCurrencyType
          }
          meta {
            itemsCount
            totalItemsCount
            totalPages
            itemsPerPage
            currentPage
          }
        }
      }
    `,e)}tangoCashout(e){return this.graphql.request(`
      mutation tangoCashout($giftCardId: String!, $email: String) {
        tangoCashout(giftCardId: $giftCardId, email: $email) {
          __typename
          ... on CashoutInitiatedResponseObject {
            id
          }
          ... on CashoutInitiationErrorObject {
            ${G}
          }
        }
      }
    `,e)}tremendousCashout(e){return this.graphql.request(`
      mutation tremendousCashout($giftCardId: Float!, $username: String!) {
        tremendousCashout(giftCardId: $giftCardId, username: $username) {
          __typename
          ... on CashoutInitiatedResponseObject {
            id
          }
          ... on CashoutInitiationErrorObject {
            ${G}
          }
        }
      }
    `,e)}gifteeCashout(e){return this.graphql.request(`
      mutation GifteeCashout($giftCardId: Int!, $email: String) {
        gifteeCashout(giftCardId: $giftCardId, email: $email) {
          __typename
          ... on CashoutInitiatedResponseObject {
            id
          }
          ... on CashoutInitiationErrorObject {
            ${G}
          }
        }
      }
    `,e)}getGiftcards(e){return this.graphql.request(`
      query($currency: AvailableCurrencies, $country: CountryCode, $brand: GiftCardBrand, $providerName: WithdrawProvider) {
        getGiftCards(currency: $currency, country: $country, brand: $brand, providerName: $providerName) {
          brand
          brandName
          country
          currency
          disclaimer
          enabled
          id
          imageUrl
          status
          value
          userFee
          feeType
          providerFee
        }
      }
    `,e)}async checkProviderAvailability(e){let t=!1;try{let r=await this.getCashoutProviders(),n=r?.data?.getCashoutProviders.items.find(t=>t.withdrawProvider===e);n?.state===$.CashoutProviderState.Enabled&&(t=!0)}catch(e){t=!1}return t}getCashoutProviders(){return this.graphql.request(`
      query($limit: Int, $page: Int) {
        getCashoutProviders(limit: $limit, page: $page) {
          items {
            state
            withdrawProvider
          }
          meta {
            currentPage
            itemsCount
            itemsPerPage
            totalItemsCount
            totalPages
          }
        }
      }
    `,{limit:20,page:1})}getStakeUsAddress(){return this.graphql.request(`
      query {
        getStakeUsAddress
      }`)}getCryptoRates(){return this.graphql.request(`
      query {
        getCryptoRates {
          bitcoin {
            dollarPrice
            coinFee
            platformFee
            minimumCashoutAmount
          }
          ether {
            dollarPrice
            coinFee
            platformFee
            minimumCashoutAmount
          }
          litecoin {
            dollarPrice
            coinFee
            platformFee
            minimumCashoutAmount
          }
          dogecoin {
            dollarPrice
            coinFee
            platformFee
            minimumCashoutAmount
          }
          ripple {
            dollarPrice
          }
          tron {
            dollarPrice
          }
          bitcoincash {
            dollarPrice
          }
          eos {
            dollarPrice
          }
          tether {
            dollarPrice
          }
          usdc {
            dollarPrice
          }
          sol {
            dollarPrice
            minimumCashoutAmount
          }
        }
      }
    `)}getHasUserWithdrawal(e){return this.graphql.request(`
      query($type: WithdrawType!, $providerName: WithdrawProvider) {
        hasUserWithdrawal(type: $type, providerName: $providerName)
      }
    `,e)}}e.s(["default",()=>q],74360)},677905,550664,e=>{"use strict";var t=e.i(169329);e.i(890526);var r=e.i(840731);let n=(0,r.graphql)(`
  query getEarnFeed($limit: Int = 10, $countryCode: CountryCode = ALL) {
    findEarnActivityFeed(countryCode: $countryCode, limit: $limit) {
      items {
        gainId
        offername
        coins
        bonus
        date
        wall
        username
        avatar
        countryCode
        type
      }
    }
  }
`),a=(0,r.graphql)(`
  query getWithdrawalFeed($limit: Int = 10, $countryCode: CountryCode = ALL) {
    findWithdrawActivityFeed(countryCode: $countryCode, limit: $limit) {
      items {
        gainId
        withdrawType
        coins
        bonus
        date
        username
        type
        avatar
        countryCode
      }
    }
  }
`);var i=e.i(158081);class s{graphql;constructor(e){this.graphql=e}getEarnFeed(e=i.CountryCode.All){return this.graphql.request((0,t.printDocument)(n),{limit:10,countryCode:e})}getWithdrawalsFeed(e=i.CountryCode.All){return this.graphql.request((0,t.printDocument)(a),{limit:10,countryCode:e})}getFullActivityFeed(e=i.CountryCode.All){return this.graphql.request(`
        query getFullActivityFeed($limit: Int = 10, $countryCode: CountryCode = ALL) {
          findWithdrawActivityFeed(countryCode: $countryCode, limit: $limit) {
            items {
              gainId
              withdrawType
              coins
              bonus
              date
              username
              type
              avatar
              countryCode
            }
          }
          findEarnActivityFeed(countryCode: $countryCode, limit: $limit) {
            items {
              gainId
              offername
              coins
              bonus
              date
              wall
              username
              avatar
              countryCode
              type
            }
          }
        }
      `,{limit:10,countryCode:e})}}e.s(["default",()=>s],677905);let o=[i.OfferCategory.Game,i.OfferCategory.Other];e.s(["ANY_OFFERS_WITH_CATEGORIES",0,{limit:3,page:1,categories:o},"DEFAULT_OFFER_CATEGORIES",0,o],550664)},631926,(e,t,r)=>{var n=e.r(139088);t.exports=function(){return n.Date.now()}},374009,(e,t,r)=>{var n=e.r(12447),a=e.r(631926),i=e.r(773759),s=Math.max,o=Math.min;t.exports=function(e,t,r){var u,l,d,c,p,g,f=0,h=!1,m=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function _(t){var r=u,n=l;return u=l=void 0,f=t,c=e.apply(n,r)}function A(e){var r=e-g,n=e-f;return void 0===g||r>=t||r<0||m&&n>=d}function S(){var e,r,n,i=a();if(A(i))return E(i);p=setTimeout(S,(e=i-g,r=i-f,n=t-e,m?o(n,d-r):n))}function E(e){return(p=void 0,y&&u)?_(e):(u=l=void 0,c)}function C(){var e,r=a(),n=A(r);if(u=arguments,l=this,g=r,n){if(void 0===p)return f=e=g,p=setTimeout(S,t),h?_(e):c;if(m)return clearTimeout(p),p=setTimeout(S,t),_(g)}return void 0===p&&(p=setTimeout(S,t)),c}return t=i(t)||0,n(r)&&(h=!!r.leading,d=(m="maxWait"in r)?s(i(r.maxWait)||0,t):d,y="trailing"in r?!!r.trailing:y),C.cancel=function(){void 0!==p&&clearTimeout(p),f=0,u=g=l=p=void 0},C.flush=function(){return void 0===p?c:E(a())},C}},665742,(e,t,r)=>{t.exports=function(){this.__data__=[],this.size=0}},25172,(e,t,r)=>{t.exports=function(e,t){return e===t||e!=e&&t!=t}},134314,(e,t,r)=>{var n=e.r(25172);t.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return -1}},419206,(e,t,r)=>{var n=e.r(134314),a=Array.prototype.splice;t.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():a.call(t,r,1),--this.size,!0)}},467763,(e,t,r)=>{var n=e.r(134314);t.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},523407,(e,t,r)=>{var n=e.r(134314);t.exports=function(e){return n(this.__data__,e)>-1}},553833,(e,t,r)=>{var n=e.r(134314);t.exports=function(e,t){var r=this.__data__,a=n(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}},729039,(e,t,r)=>{var n=e.r(665742),a=e.r(419206),i=e.r(467763),s=e.r(523407),o=e.r(553833);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=a,u.prototype.get=i,u.prototype.has=s,u.prototype.set=o,t.exports=u},405400,(e,t,r)=>{var n=e.r(729039);t.exports=function(){this.__data__=new n,this.size=0}},986238,(e,t,r)=>{t.exports=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}},957831,(e,t,r)=>{t.exports=function(e){return this.__data__.get(e)}},977802,(e,t,r)=>{t.exports=function(e){return this.__data__.has(e)}},771223,(e,t,r)=>{var n=e.r(377684),a=e.r(12447);t.exports=function(e){if(!a(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},853789,(e,t,r)=>{t.exports=e.r(139088)["__core-js_shared__"]},269553,(e,t,r)=>{var n,a=e.r(853789),i=(n=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(e){return!!i&&i in e}},776366,(e,t,r)=>{var n=Function.prototype.toString;t.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},54368,(e,t,r)=>{var n=e.r(771223),a=e.r(269553),i=e.r(12447),s=e.r(776366),o=/^\[object .+?Constructor\]$/,u=Object.prototype,l=Function.prototype.toString,d=u.hasOwnProperty,c=RegExp("^"+l.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(e){return!(!i(e)||a(e))&&(n(e)?c:o).test(s(e))}},263958,(e,t,r)=>{t.exports=function(e,t){return null==e?void 0:e[t]}},841920,(e,t,r)=>{var n=e.r(54368),a=e.r(263958);t.exports=function(e,t){var r=a(e,t);return n(r)?r:void 0}},687362,(e,t,r)=>{t.exports=e.r(841920)(e.r(139088),"Map")},932760,(e,t,r)=>{t.exports=e.r(841920)(Object,"create")},150514,(e,t,r)=>{var n=e.r(932760);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},197617,(e,t,r)=>{t.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=!!t,t}},757412,(e,t,r)=>{var n=e.r(932760),a=Object.prototype.hasOwnProperty;t.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return a.call(t,e)?t[e]:void 0}},623592,(e,t,r)=>{var n=e.r(932760),a=Object.prototype.hasOwnProperty;t.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:a.call(t,e)}},239004,(e,t,r)=>{var n=e.r(932760);t.exports=function(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},734421,(e,t,r)=>{var n=e.r(150514),a=e.r(197617),i=e.r(757412),s=e.r(623592),o=e.r(239004);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=a,u.prototype.get=i,u.prototype.has=s,u.prototype.set=o,t.exports=u},848994,(e,t,r)=>{var n=e.r(734421),a=e.r(729039),i=e.r(687362);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||a),string:new n}}},224053,(e,t,r)=>{t.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},487994,(e,t,r)=>{var n=e.r(224053);t.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},996768,(e,t,r)=>{var n=e.r(487994);t.exports=function(e){var t=n(this,e).delete(e);return this.size-=!!t,t}},929932,(e,t,r)=>{var n=e.r(487994);t.exports=function(e){return n(this,e).get(e)}},892647,(e,t,r)=>{var n=e.r(487994);t.exports=function(e){return n(this,e).has(e)}},446644,(e,t,r)=>{var n=e.r(487994);t.exports=function(e,t){var r=n(this,e),a=r.size;return r.set(e,t),this.size+=+(r.size!=a),this}},587547,(e,t,r)=>{var n=e.r(848994),a=e.r(996768),i=e.r(929932),s=e.r(892647),o=e.r(446644);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=a,u.prototype.get=i,u.prototype.has=s,u.prototype.set=o,t.exports=u},320517,(e,t,r)=>{var n=e.r(729039),a=e.r(687362),i=e.r(587547);t.exports=function(e,t){var r=this.__data__;if(r instanceof n){var s=r.__data__;if(!a||s.length<199)return s.push([e,t]),this.size=++r.size,this;r=this.__data__=new i(s)}return r.set(e,t),this.size=r.size,this}},901551,(e,t,r)=>{var n=e.r(729039),a=e.r(405400),i=e.r(986238),s=e.r(957831),o=e.r(977802),u=e.r(320517);function l(e){var t=this.__data__=new n(e);this.size=t.size}l.prototype.clear=a,l.prototype.delete=i,l.prototype.get=s,l.prototype.has=o,l.prototype.set=u,t.exports=l},221274,(e,t,r)=>{t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},439805,(e,t,r)=>{t.exports=function(e){return this.__data__.has(e)}},27493,(e,t,r)=>{var n=e.r(587547),a=e.r(221274),i=e.r(439805);function s(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}s.prototype.add=s.prototype.push=a,s.prototype.has=i,t.exports=s},851477,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},315262,(e,t,r)=>{t.exports=function(e,t){return e.has(t)}},206856,(e,t,r)=>{var n=e.r(27493),a=e.r(851477),i=e.r(315262);t.exports=function(e,t,r,s,o,u){var l=1&r,d=e.length,c=t.length;if(d!=c&&!(l&&c>d))return!1;var p=u.get(e),g=u.get(t);if(p&&g)return p==t&&g==e;var f=-1,h=!0,m=2&r?new n:void 0;for(u.set(e,t),u.set(t,e);++f<d;){var y=e[f],_=t[f];if(s)var A=l?s(_,y,f,t,e,u):s(y,_,f,e,t,u);if(void 0!==A){if(A)continue;h=!1;break}if(m){if(!a(t,function(e,t){if(!i(m,t)&&(y===e||o(y,e,r,s,u)))return m.push(t)})){h=!1;break}}else if(!(y===_||o(y,_,r,s,u))){h=!1;break}}return u.delete(e),u.delete(t),h}},263750,(e,t,r)=>{t.exports=e.r(139088).Uint8Array},75331,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}},899850,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}},678012,(e,t,r)=>{var n=e.r(630353),a=e.r(263750),i=e.r(25172),s=e.r(206856),o=e.r(75331),u=e.r(899850),l=n?n.prototype:void 0,d=l?l.valueOf:void 0;t.exports=function(e,t,r,n,l,c,p){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!c(new a(e),new a(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var g=o;case"[object Set]":var f=1&n;if(g||(g=u),e.size!=t.size&&!f)break;var h=p.get(e);if(h)return h==t;n|=2,p.set(e,t);var m=s(g(e),g(t),n,l,c,p);return p.delete(e),m;case"[object Symbol]":if(d)return d.call(e)==d.call(t)}return!1}},169102,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}},45350,(e,t,r)=>{t.exports=Array.isArray},823403,(e,t,r)=>{var n=e.r(169102),a=e.r(45350);t.exports=function(e,t,r){var i=t(e);return a(e)?i:n(i,r(e))}},536100,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[a++]=s)}return i}},45159,(e,t,r)=>{t.exports=function(){return[]}},717332,(e,t,r)=>{var n=e.r(536100),a=e.r(45159),i=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols;t.exports=s?function(e){return null==e?[]:n(s(e=Object(e)),function(t){return i.call(e,t)})}:a},855803,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},566645,(e,t,r)=>{var n=e.r(377684),a=e.r(877289);t.exports=function(e){return a(e)&&"[object Arguments]"==n(e)}},473250,(e,t,r)=>{var n=e.r(566645),a=e.r(877289),i=Object.prototype,s=i.hasOwnProperty,o=i.propertyIsEnumerable;t.exports=n(function(){return arguments}())?n:function(e){return a(e)&&s.call(e,"callee")&&!o.call(e,"callee")}},24013,(e,t,r)=>{t.exports=function(){return!1}},356956,(e,t,r)=>{var n=e.r(139088),a=e.r(24013),i=r&&!r.nodeType&&r,s=i&&t&&!t.nodeType&&t,o=s&&s.exports===i?n.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||a},66397,(e,t,r)=>{var n=/^(?:0|[1-9]\d*)$/;t.exports=function(e,t){var r=typeof e;return!!(t=null==t?0x1fffffffffffff:t)&&("number"==r||"symbol"!=r&&n.test(e))&&e>-1&&e%1==0&&e<t}},98376,(e,t,r)=>{t.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=0x1fffffffffffff}},476602,(e,t,r)=>{var n=e.r(377684),a=e.r(98376),i=e.r(877289),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,t.exports=function(e){return i(e)&&a(e.length)&&!!s[n(e)]}},233999,(e,t,r)=>{t.exports=function(e){return function(t){return e(t)}}},180156,(e,t,r)=>{var n=e.r(100236),a=r&&!r.nodeType&&r,i=a&&t&&!t.nodeType&&t,s=i&&i.exports===a&&n.process;t.exports=function(){try{var e=i&&i.require&&i.require("util").types;if(e)return e;return s&&s.binding&&s.binding("util")}catch(e){}}()},3023,(e,t,r)=>{var n=e.r(476602),a=e.r(233999),i=e.r(180156),s=i&&i.isTypedArray;t.exports=s?a(s):n},458877,(e,t,r)=>{var n=e.r(855803),a=e.r(473250),i=e.r(45350),s=e.r(356956),o=e.r(66397),u=e.r(3023),l=Object.prototype.hasOwnProperty;t.exports=function(e,t){var r=i(e),d=!r&&a(e),c=!r&&!d&&s(e),p=!r&&!d&&!c&&u(e),g=r||d||c||p,f=g?n(e.length,String):[],h=f.length;for(var m in e)(t||l.call(e,m))&&!(g&&("length"==m||c&&("offset"==m||"parent"==m)||p&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||o(m,h)))&&f.push(m);return f}},763996,(e,t,r)=>{var n=Object.prototype;t.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},825717,(e,t,r)=>{t.exports=function(e,t){return function(r){return e(t(r))}}},942369,(e,t,r)=>{t.exports=e.r(825717)(Object.keys,Object)},848477,(e,t,r)=>{var n=e.r(763996),a=e.r(942369),i=Object.prototype.hasOwnProperty;t.exports=function(e){if(!n(e))return a(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}},351095,(e,t,r)=>{var n=e.r(771223),a=e.r(98376);t.exports=function(e){return null!=e&&a(e.length)&&!n(e)}},33679,(e,t,r)=>{var n=e.r(458877),a=e.r(848477),i=e.r(351095);t.exports=function(e){return i(e)?n(e):a(e)}},413370,(e,t,r)=>{var n=e.r(823403),a=e.r(717332),i=e.r(33679);t.exports=function(e){return n(e,i,a)}},330698,(e,t,r)=>{var n=e.r(413370),a=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,i,s,o){var u=1&r,l=n(e),d=l.length;if(d!=n(t).length&&!u)return!1;for(var c=d;c--;){var p=l[c];if(!(u?p in t:a.call(t,p)))return!1}var g=o.get(e),f=o.get(t);if(g&&f)return g==t&&f==e;var h=!0;o.set(e,t),o.set(t,e);for(var m=u;++c<d;){var y=e[p=l[c]],_=t[p];if(i)var A=u?i(_,y,p,t,e,o):i(y,_,p,e,t,o);if(!(void 0===A?y===_||s(y,_,r,i,o):A)){h=!1;break}m||(m="constructor"==p)}if(h&&!m){var S=e.constructor,E=t.constructor;S!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof S&&S instanceof S&&"function"==typeof E&&E instanceof E)&&(h=!1)}return o.delete(e),o.delete(t),h}},801419,(e,t,r)=>{t.exports=e.r(841920)(e.r(139088),"DataView")},717074,(e,t,r)=>{t.exports=e.r(841920)(e.r(139088),"Promise")},106966,(e,t,r)=>{t.exports=e.r(841920)(e.r(139088),"Set")},573895,(e,t,r)=>{t.exports=e.r(841920)(e.r(139088),"WeakMap")},677325,(e,t,r)=>{var n=e.r(801419),a=e.r(687362),i=e.r(717074),s=e.r(106966),o=e.r(573895),u=e.r(377684),l=e.r(776366),d="[object Map]",c="[object Promise]",p="[object Set]",g="[object WeakMap]",f="[object DataView]",h=l(n),m=l(a),y=l(i),_=l(s),A=l(o),S=u;(n&&S(new n(new ArrayBuffer(1)))!=f||a&&S(new a)!=d||i&&S(i.resolve())!=c||s&&S(new s)!=p||o&&S(new o)!=g)&&(S=function(e){var t=u(e),r="[object Object]"==t?e.constructor:void 0,n=r?l(r):"";if(n)switch(n){case h:return f;case m:return d;case y:return c;case _:return p;case A:return g}return t}),t.exports=S},178353,(e,t,r)=>{var n=e.r(901551),a=e.r(206856),i=e.r(678012),s=e.r(330698),o=e.r(677325),u=e.r(45350),l=e.r(356956),d=e.r(3023),c="[object Arguments]",p="[object Array]",g="[object Object]",f=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,h,m,y){var _=u(e),A=u(t),S=_?p:o(e),E=A?p:o(t);S=S==c?g:S,E=E==c?g:E;var C=S==g,R=E==g,I=S==E;if(I&&l(e)){if(!l(t))return!1;_=!0,C=!1}if(I&&!C)return y||(y=new n),_||d(e)?a(e,t,r,h,m,y):i(e,t,S,r,h,m,y);if(!(1&r)){var T=C&&f.call(e,"__wrapped__"),O=R&&f.call(t,"__wrapped__");if(T||O){var P=T?e.value():e,$=O?t.value():t;return y||(y=new n),m(P,$,r,h,y)}}return!!I&&(y||(y=new n),s(e,t,r,h,m,y))}},14943,(e,t,r)=>{var n=e.r(178353),a=e.r(877289);t.exports=function e(t,r,i,s,o){return t===r||(null!=t&&null!=r&&(a(t)||a(r))?n(t,r,i,s,e,o):t!=t&&r!=r)}},898892,(e,t,r)=>{var n=e.r(14943);t.exports=function(e,t){return n(e,t)}},892251,290317,e=>{"use strict";var t=e.i(247167);e.i(773544);var r=e.i(254425),n=e.i(176829),a=e.i(986872),i=e.i(708921),s=e.i(74360),o=e.i(677905),u=e.i(158081),l=e.i(550664),d=e.i(31645),c=e.i(56792);let p=u.GetMyOffersSort.MostRecentClickDate,g={limit:4,page:1,includeExpired:!0,clicked:!1,startStatuses:[u.OfferClickStatus.PartiallyCompleted,u.OfferClickStatus.Completed],hideNotStartedAfterMin:null},f={limit:3,page:1,startStatuses:[u.OfferClickStatus.Completed],includeExpired:!0,hideNotStartedAfterMin:null};function h({includeActivity:e,includeCashbackPromotion:t}={}){let r=`
            status {
              releaseOn
              completedAt
              status
              completionCount
              coinsEarned
              lastCompletionDate
            }
            progress {
              targetValue
              value
            }
            `,n=e?`
            activity {
              id
              activityType
              clickDate
              coins
              date
              pendingUntil
              rejected
              pending
            }
      `:"",a=t?`
            cashbackPromotion {
              coinStrike
              percentageStrike
              promotionalText
              validFrom
              validTo
            }
      `:"",i=`
        displayProperties {
          badge
          badgeMultiplier
          isPayoutStructureVisible
        }
      `;return`
    query getMyOffers(
      $clicked: Boolean,
      $hideNotStartedAfterMin: Float,
      $limit: Int,
      $page: Int,
      $startStatuses: [OfferClickStatus!],
      $includeExpired: Boolean,
      $categories: [OfferCategory!],
      $source: OfferClickSource,
      $sort: GetMyOffersSort
    ) {
      getMyOffers(
        clicked: $clicked,
        hideNotStartedAfterMin: $hideNotStartedAfterMin,
        limit: $limit,
        page: $page,
        startStatuses: $startStatuses,
        includeExpired: $includeExpired,
        categories: $categories,
        source: $source,
        sort: $sort
      ) {
        items {
          id
          name
          slug
          wallName
          description
          thumbnail
          thumbnailLarge
          thumbnailPortrait
          isAndroid
          isDesktop
          isIos
          category
          coins
          gameId
          tags
          isAvailable
          ${a}
          ${n}
          ${i}
          boost {
            level
            multiplier
          }
          start {
            # The click id. The troubleshoot reward's eligibility query and its claim are
            # both keyed on it, so without it the whole reward path is dead on this
            # surface — the query stays disabled and the explainer ends on "Got it".
            id
            completedAt
            startedAt
            status
            lastActivity
            trackingStatus
          }
          tasks {
            alwaysDisplay
            rewardGroup
            coins
            id
            isInstallTask
            maxCompleteDays
            offerId
            priority
            requirementValue
            hint
            maxCompletions
            title
            ${r}
          }
        }
        meta {
          itemCount
          totalItems
          totalPages
          itemsPerPage
          currentPage
        }
      }
    }
  `}let m=`query getMinigames {
  getMinigames {
    items {
      name
      rewardType
      rewardAmount
      playFrequency
      userMinigameProgressStatus
    }
  }
}`;e.s(["COMPLETED_OFFERS",0,f,"DEFAULT_MY_OFFERS_SORT",0,p,"GET_MINIGAMES_QUERY",0,m,"IN_PROGRESS_AND_COMPLETED_OFFERS",0,g,"buildGetMyOffersQuery",0,h,"buildMyOffersArgs",0,function(e){return e===c.OfferProgressStateEnum.InProgress?{limit:100,page:1,clicked:!0,hideNotStartedAfterMin:10080,startStatuses:[u.OfferClickStatus.PartiallyCompleted],sort:u.GetMyOffersSort.MostRecentActivity}:{limit:100,hideNotStartedAfterMin:null,page:1,startStatuses:[u.OfferClickStatus.Completed],includeExpired:!0,sort:u.GetMyOffersSort.MostRecentActivity}},"buildMyOffersCountQueryKey",0,function(e){return[d.QueryKeys.GRAPHQL_GET_MY_OFFERS,e]},"buildMyOffersQueryKey",0,function({offerState:e,includeActivity:t=!1,categories:r=l.DEFAULT_OFFER_CATEGORIES,includeCashbackPromotion:n=!1}){return[d.QueryKeys.GRAPHQL_GET_MY_OFFERS,e,t,r,n]},"defaultGameOfferMinutes",0,60,"defaultOtherOfferMinutes",0,10080],290317);let y=`
  query getMyOffers(
    $clicked: Boolean,
    $hideNotStartedAfterMin: Float,
    $limit: Int,
    $page: Int,
    $startStatuses: [OfferClickStatus!],
    $includeExpired: Boolean,
    $categories: [OfferCategory!],
    $source: OfferClickSource,
    $sort: GetMyOffersSort
  ) {
    getMyOffers(
      clicked: $clicked,
      hideNotStartedAfterMin: $hideNotStartedAfterMin,
      limit: $limit,
      page: $page,
      startStatuses: $startStatuses,
      includeExpired: $includeExpired,
      categories: $categories,
      source: $source,
      sort: $sort
    ) {
      items {
        id
      }
      meta {
        totalItems
      }
    }
  }
`,_=`
      query getMyOffers(
        $limit: Int,
        $page: Int,
        $categories: [OfferCategory!],
        $source: OfferClickSource,
        $sort: GetMyOffersSort
      ) {
        getMyOffers(
          limit: $limit,
          page: $page,
          categories: $categories,
          source: $source,
          sort: $sort
        ) {
          items {
            id
            name
            slug
            thumbnail
            coins
            category
            wallName
            start {
              id
              deviceType
            }
            support {
              minHoursToReport
              status
            }
            activity {
              id
              activityType
              clickDate
              coins
              date
              pendingUntil
              rejected
              pending
            }
          }
          meta {
            itemCount
            totalItems
            totalPages
            itemsPerPage
            currentPage
          }
        }
      }
    `,A=u.GetMyOffersSort.MostRecentActivity,S=`
  query getOffers(
    $limit: Int,
    $page: Int,
    $categories: [OfferCategory!],
    $isAndroid: Boolean,
    $isIos: Boolean,
    $isDesktop: Boolean,
    $searchTerm: String,
    $sort: GetOffersSort!,
    $source: OfferClickSource,
    $includeTags: [OfferTagEnum!],
    $excludeTags: [OfferTagEnum!],
    $isSkipUserClickedOffers: Boolean,
    $gameId: Int,
    $gameIds: [Int!],
    $feedId: ID
  ) {
    getOffers(
      limit: $limit,
      page: $page,
      categories: $categories,
      isAndroid: $isAndroid,
      isIos: $isIos,
      isDesktop: $isDesktop,
      searchTerm: $searchTerm,
      sort: $sort,
      source: $source,
      includeTags: $includeTags,
      excludeTags: $excludeTags,
      isSkipUserClickedOffers: $isSkipUserClickedOffers,
      gameId: $gameId,
      gameIds: $gameIds,
      feedId: $feedId
    ) {
      items {
        id
        # The earn feed carried no start block at all, so every install-troubleshoot check
        # on a card silently read undefined: the reward query never ran, and
        # isOfferTrackingFailed was structurally false, so an offer whose tracking had
        # already failed still showed "Install not tracking?". Two fields is all it needs.
        start {
          id
          trackingStatus
        }
        name
        slug
        gameId
        description
        thumbnail
        thumbnailLarge
        thumbnailPortrait
        thumbnails {
          placeholder {
            blurhash
            averageColor
          }
          largePlaceholder {
            blurhash
            averageColor
          }
        }
        isAndroid
        isDesktop
        isIos
        category
        coins
        status
        canStart
        url
        tags
        displayProperties {
          badge
          badgeMultiplier
          averageReleaseDays
          isReactivation
        }
        images {
          url
        }
        videos {
          url
        }
        game {
          id
          name
          iosId
          androidId
          ratings {
            android {
              reviewsCount
              score
            }
            ios {
              reviewsCount
              score
            }
          }
        }
        tasks {
          payoutStructureId
        }
      }
      meta {
        itemCount
        totalItems
        totalPages
        itemsPerPage
        currentPage
      }
      feed {
        id
        expireAt
      }
    }
  }
`;class E{graphql;constructor(e){this.graphql=e}getOffer({slug:e,id:t,feedId:r},n){return this.graphql.request(`
      query getOffer($slug: String, $id: Int, $source: GetOfferSourceInput, $feedId: ID) {
        getOffer(slug: $slug, id: $id, source: $source, feedId: $feedId) {
          category
          coins
          description
          id
          gameId
          boost {
            level
            multiplier
          }
          images {
            url
          }
          videos {
            url
          }
          isAndroid
          isDesktop
          isIos
          enabledInLiteMode
          name
          popularity
          requirements
          displayProperties {
            badge
            badgeMultiplier
            averageReleaseDays
            isPayoutStructureVisible
            isReactivation
          }
          slug
          start {
            completedAt
            deviceType
            lastActivity
            startedAt
            status
            id
            trackingStatus
          }
          status
          coupons {
            coupon
            description
            endDate
            name
            requirements
            startDate
          }
          isAvailable
          cashbackPromotion {
            coinStrike
            percentageStrike
            promotionalText
            validFrom
            validTo
          }
          activity {
            id
            activityType
            clickDate
            coins
            date
            pendingUntil
            rejected
            pending
          }
          tasks {
            alwaysDisplay
            coins
            id
            isInstallTask
            maxCompleteDays
            offerId
            priority
            requirementValue
            hint
            rewardGroup
            completions {
              coins
              completedAt
              completionCount
              id
              isChargebacked
              isHeld
              releaseAt
            }
            status {
              releaseOn
              completedAt
              status
              completionCount
              coinsEarned
              lastCompletionDate
            }
            progress {
              targetValue
              value
            }
            maxCompletions
            title
            assignedAt
            payoutStructureId
            updatedAt
            coolDownUntil
            rewardType
            rewardOptions {
              burningRewardOptions {
                decayHours
              }
              coinWheelRewardOptions
              variableRewardOptions {
                coins
                probability
              }
            }
          }
          thumbnail
          thumbnailLarge
          thumbnailPortrait
          canStart
          tags
          url
          wallName
          countries
          game {
            id,
            name,
            iosId,
            androidId,
            ratings {
              android {
                reviewsCount
                score
              }
              ios {
                reviewsCount
                score
              }
            }
          }
        }
      }
      `,{slug:e,id:t,source:n,...r&&{feedId:r}})}getOfferSupportTasks({id:e}){return this.graphql.request(`
        query getOffer($id: Int) {
          getOffer(id: $id) {
            id
            tasks {
              id
              coins
              title
              status {
                status
              }
              supportTicket {
                status
                createdAt
              }
            }
          }
        }
       `,{id:e})}getOffers(e){let{categories:t,...r}=e;return this.graphql.request(S,{...r,categories:t?.length?t:l.DEFAULT_OFFER_CATEGORIES})}sendOfferOpenedEvent({slug:e,id:t},r){return this.graphql.request(`
      query getOffer($slug: String, $id: Int, $source: GetOfferSourceInput) {
        getOffer(slug: $slug, id: $id, source: $source) {
          id
        }
      }
      `,{slug:e,id:t,source:r})}getMultipleOffers(e){return Promise.all(e.map(e=>this.getOffer({id:e}))).then(e=>e.filter(e=>e?.data?.getOffer).map(e=>e?.data?.getOffer))}getMyOffers(e){let{includeActivity:t,includeCashbackPromotion:r,categories:n,...a}=e;return this.graphql.request(h({includeActivity:t,includeCashbackPromotion:r}),{...a,categories:n?.length?n:l.DEFAULT_OFFER_CATEGORIES,sort:a.sort??p})}getMyOffersCount(e){let{categories:t,...r}=e;return this.graphql.request(y,{...r,categories:t?.length?t:l.DEFAULT_OFFER_CATEGORIES,sort:p})}getMyOffersForProfilePageInProgressTab(e){let{categories:t,...r}=e;return this.graphql.request(_,{...r,categories:t?.length?t:l.DEFAULT_OFFER_CATEGORIES,sort:A})}getCashbackOffers({categories:e,...t}){return this.graphql.request(`
      query getOffers(
        $limit: Int,
        $page: Int,
        $categories: [OfferCategory!],
        $isAndroid: Boolean,
        $isIos: Boolean,
        $isDesktop: Boolean,
        $searchTerm: String,
        $sort: GetOffersSort!,
        $includeTags: [OfferTagEnum!],
        $source: OfferClickSource
      ) {
        getOffers(
          limit: $limit,
          page: $page,
          categories: $categories,
          isAndroid: $isAndroid,
          isIos: $isIos,
          isDesktop: $isDesktop,
          searchTerm: $searchTerm,
          sort: $sort,
          includeTags: $includeTags,
          source: $source
        ) {
          items {
            id
            name
            description
            slug
            coins
            category
            thumbnail
            thumbnailLarge
            thumbnailPortrait
            isAndroid
            isDesktop
            isIos
            images {
              url
            }
            coupons {
              coupon
              description
              endDate
              name
              requirements
              startDate
            }
            isAvailable
            cashbackPromotion {
              coinStrike
              percentageStrike
              promotionalText
              validFrom
              validTo
            }
            tasks {
              id
              title
              coins
              hint
              offerId
              payoutStructureId
              priority
              requirementValue
              updatedAt
            }
            enabledInLiteMode
            requirements
            tags
            canStart
            url
            wallName
            countries
          }
          meta {
            itemCount
            totalItems
            totalPages
            itemsPerPage
            currentPage
         }
        }
      }
    `,{...t,categories:e?.length?e:[u.OfferCategory.Cashback]})}getMyOffersForLottery(){return this.graphql.request(`
      query getMyOffers {
        getMyOffers(
          limit: 1,
          page: 1,
          includeExpired: false,
          startStatuses: [PARTIALLY_COMPLETED]
          categories: [GAME, OTHER]
          sort: MOST_RECENT_CLICK_DATE
        ) {
          items {
            id
            name
            thumbnail
            thumbnailLarge
            thumbnailPortrait
            tags
          }
        }
      }
    `)}}var C=e.i(374009),R=e.i(898892);class I{app;buffer=[];trackedPayloads=[];debounceFlushBuffer;isFlushing=!1;retryAttempts=0;constructor(e={}){this.app=e.app,this.debounceFlushBuffer=(0,C.default)(this.flushBuffer.bind(this),1e3)}flushBuffer(){if(this.isFlushing||this.retryAttempts>=3||!this.app||0===this.buffer.length)return;this.isFlushing=!0;let{batch:e,remainder:t,fitsBudget:r}=function(e){let t=new TextEncoder,r=t.encode(JSON.stringify({events:[]})).length,n=[];for(let a=0;a<e.length;a+=1){let i=t.encode(JSON.stringify(e[a])).length+1;if(n.length>0&&r+i>16384)return{batch:n,remainder:e.slice(a),fitsBudget:r<=16384};r+=i,n.push(e[a])}return{batch:n,remainder:[],fitsBudget:r<=16384}}(this.buffer);this.buffer=t,this.app.post("/fc-api/user-events",JSON.stringify({events:e}),{keepalive:r}).then(()=>{this.retryAttempts=0}).catch(()=>{this.buffer=e.concat(this.buffer),this.retryAttempts+=1}).finally(()=>{this.isFlushing=!1,this.buffer.length>0&&this.debounceFlushBuffer()})}trackOfferViewed({apiResUuid:e,...t}){t.timestamp=new Date().getTime(),!this.trackedPayloads.some(e=>e.offerId===t.offerId&&e.source===t.source&&e.position===t.position&&e.gameId===t.gameId&&e.thumbnailLarge===t.thumbnailLarge&&e.thumbnail===t.thumbnail&&(0,R.default)(e.payoutStructureIds,t.payoutStructureIds)&&e.coins===t.coins)&&this.app&&(this.trackedPayloads.push(t),this.buffer.push({payload:t,type:"offer_viewed",apiResUuid:e,timestamp:t.timestamp}),this.retryAttempts=0,this.debounceFlushBuffer())}trackOfferInteracted(e){e.timestamp=new Date().getTime(),!this.trackedPayloads.some(t=>t.offerId===e.offerId&&t.source===e.source&&t.position===e.position&&t.category===e.category&&t.thumbnail===e.thumbnail&&t.thumbnailLarge===e.thumbnailLarge&&t.target===e.target&&(0,R.default)(t.payoutStructureIds,e.payoutStructureIds)&&t.coins===e.coins)&&this.app&&(this.trackedPayloads.push(e),this.buffer.push({payload:e,type:"offer_interacted"}),this.retryAttempts=0,this.debounceFlushBuffer())}}let T=`query {
  userNewSystemEarning {
    amount
  }
}`,O=`query {
  userReferralVerification {
    result
  }
}`,P=`mutation {
  claim {
    success
  }
}`,$=`mutation($code: String!) {
  changeReferralCode(code: $code) {
    message
  }
}`,G=`query GetUserOfferAffiliateReward($offerId: Int!) {
    getUserOfferAffiliateReward(offerId: $offerId) {
        id
        offerId
    }
}`,q=`query {
  userAffiliateInfo {
    tier,
    commission,
    totalEarning,
    pendingEarnings,
    earnedLastMonth,
    totalReferrals,
    affiliateBalance
  }
}`;class v{graphql;constructor(e){this.graphql=e}getAffiliatesInfo(){return this.graphql.request(q)}getUserNewSystemEarnings(){return this.graphql.request(T)}getUserAffiliateVerification(){return this.graphql.request(O)}claimUserBalance(){return this.graphql.request(P)}changeReferralCode(e){return this.graphql.request($,{code:e})}getUserOfferAffiliateRewards(e){return this.graphql.request(G,{offerId:e})}}class b{graphql;constructor(e){this.graphql=e}claimUserOnboardingReward(){return this.graphql.request(`
      mutation {
        claimUserOnboardingReward
      }
    `)}getUserOnboardingProgress(){return this.graphql.request(`
      query {
        getUserOnboardingProgress
      }
    `)}storeUserOnboardingProgress(e){return this.graphql.request(`
      mutation storeUserOnboardingProgress($stepIndex: Float!) {
        storeUserOnboardingProgress(stepIndex: $stepIndex)
      }
    `,{stepIndex:e})}}let L=`query getOfferTaskCompletions(
        $page: Int,
        $limit: Int,
        $isHeld: Boolean,
        $wall: String
        ) {
          getOfferTaskCompletions( 
            page: $page,
            limit: $limit,
            isHeld: $isHeld,
            wall: $wall,
            ) {
            items{
              id
              coins
              isHeld
              name
              releaseAt
              completedAt
              isChargebacked
              offer{
                name
                coins
                thumbnail
                wallName
                slug
                status
                category
              }
              activity {
                id
                activityType
                clickDate
                coins
                date
                pendingUntil
                rejected
                pending
              }
            }
            meta{
              itemsCount
              totalPages
              itemsPerPage
              currentPage
            }
        }
      }`;class k{graphql;constructor(e){this.graphql=e}getOfferTaskCompletions(e){return this.graphql.request(L,e)}}class U{graphql;constructor(e){this.graphql=e}markUserHiddenOffer(e){return this.graphql.request(`
        mutation MarkUserHiddenOffer($offerId: Int!, $reason: UserHiddenOfferReason) {
            markUserHiddenOffer(offerId: $offerId, reason: $reason)
        }
    `,e)}}let w=`
  gender
  ageGroup
  emailConsentProvided
  smsConsentProvided
  doubleOptInProvided
  pushNotificationConsentProvided
  canRefer
  canSendVerificationMarketingEmail
  monthlyInAppPurchase
  mobileGameFrequency
  language
  earningExpectation
  playTimeExpectation
  preferredCashoutMethod
  preferredGameGenres
`;class F{graphql;constructor(e){this.graphql=e}get(){return this.graphql.request(`
        query GetUserProfile {
          getUserProfile {
            ${w}
          }
        }
    `)}update(e){return this.graphql.request(`
        mutation updateUserProfile(
          $gender: Gender,
          $ageGroup: AgeGroup,
          $age: Int,
          $monthlyInAppPurchase: MonthlyInAppPurchase,
          $mobileGameFrequency: MobileGameFrequency,
          $smsConsentProvided: Boolean,
          $earningExpectation: EarningExpectation,
          $playTimeExpectation: PlayTimeExpectation,
          $preferredCashoutMethod: PreferredCashoutMethod,
          $onboardingVideoWatchCount: Int,
          $preferredGameGenres: [GameCategoryEnum!],
        ) {
          updateUserProfile(
            gender: $gender,
            ageGroup: $ageGroup,
            age: $age,
            monthlyInAppPurchase: $monthlyInAppPurchase,
            mobileGameFrequency: $mobileGameFrequency,
            smsConsentProvided: $smsConsentProvided,
            preferredCashoutMethod: $preferredCashoutMethod,
            earningExpectation: $earningExpectation,
            playTimeExpectation: $playTimeExpectation,
            onboardingVideoWatchCount: $onboardingVideoWatchCount,
            preferredGameGenres: $preferredGameGenres
          ) {
            ${w}
          }
        }
    `,e)}setLanguage(e){return this.graphql.request(`
        mutation updateUserProfile($language: supportedLanguages) {
          updateUserProfile(language: $language) {
            gainId
          }
        }
      `,e)}}class N{app;url="/fc-api/auth";constructor(e={}){this.app=e.app}async googleOneTap(e){if(!this.app)throw Error("App is not defined");await this.app.post(`${this.url}/google/one-tap`,JSON.stringify({credential:e}))}async attachCredentials(e){if(!this.app)throw Error("App is not defined");return this.app.post(`${this.url}/attach-credentials`,JSON.stringify(e))}async getExternalOfferToken(e){if(!this.app)throw Error("App is not defined");return this.app.post(`${this.url}/offer-external-ad`,JSON.stringify(e))}}class D{graphql;constructor(e){this.graphql=e}claim(e){return this.graphql.request(`
        mutation claimOfferTask($offerTaskId: Int!, $skipVariableReward: Boolean) {
            claimOfferTask(offerTaskId: $offerTaskId, skipVariableReward: $skipVariableReward) {
                coins
            }
        }
    `,e)}}class H{app;url="/fc-api/ghost";constructor(e={}){this.app=e.app}async verifyEmail(e){if(!this.app)throw Error("App is not defined");await this.app.post(`${this.url}/verify`,JSON.stringify({token:e}))}}class Q{graphql;constructor(e){this.graphql=e}createCashbackSupportTicket({activityType:e,id:t,orderNumber:r,orderAmount:n,orderCurrency:a,emailUsedForOrder:i,comments:s,discountCode:o,purchaseDate:u,screenshotUrls:l}){return this.graphql.request(`
        mutation createCashbackSupportTicket(
          $activityType: OfferActivityTypeEnum!,
          $id: Int!,
          $orderNumber: String!,
          $orderAmount: Float!,
          $orderCurrency: AvailableCurrencies!,
          $emailUsedForOrder: String!,
          $comments: String,
          $discountCode: String,
          $purchaseDate: DateTime!,
        ) {
          createCashbackSupportTicket(
            activityType: $activityType,
            id: $id,
            orderNumber: $orderNumber,
            orderAmount: $orderAmount,
            orderCurrency: $orderCurrency,
            emailUsedForOrder: $emailUsedForOrder,
            comments: $comments,
            discountCode: $discountCode,
            purchaseDate: $purchaseDate,
          )
        }
      `,{activityType:e,id:t,orderNumber:r,orderAmount:n,orderCurrency:a,emailUsedForOrder:i,comments:s,discountCode:o,purchaseDate:u,screenshotUrls:l})}}var M=e.i(374718);let x=`
  amount
  currency
  type
`,B=`
  assets {
    bannerImageUrl
    logoImageUrl
  }
`,j=`
  id
  orderStatus
  paymentStatus
  gainId
  giftCardOfferOptionId
  userGiftCardId
`,W=`
  credentials {
    ... on UserGiftCardCredentialCardCode {
      type
      value
    }
    ... on UserGiftCardCredentialCardNumber {
      type
      value
    }
    ... on UserGiftCardCredentialPin {
      type
      value
    }
    ... on UserGiftCardCredentialExpirationDate {
      type
      expirationDate
    }
    ... on UserGiftCardCredentialBarcodeNumber {
      type
      value
    }
    ... on UserGiftCardCredentialBarcodeUrl {
      type
      value
    }
    ... on UserGiftCardCredentialRedemptionUrl {
      type
      value
    }
    ... on UserGiftCardCredentialSecretCode {
      type
      value
    }
    ... on UserGiftCardCredentialSecurityCode {
      type
      value
    }
    ... on UserGiftCardCredentialSecurityUrl {
      type
      value
    }
    ... on UserGiftCardCredentialLandingPage {
      type
      value
    }
    ... on UserGiftCardCredentialCustomUrl {
      type
      value
    }
  }
`,V=`
  id
  gainId
  status
  ${B}
  brandName
  redeemChannels
  purchasedAt
  valueAmount {
    amount
    currency
  }
`,Y=`
  meta {
    currentPage
    itemsCount
    itemsPerPage
    totalItemsCount
    totalPages
  }
`;class K{graphql;constructor(e){this.graphql=e}getGiftCardOffer(e){return this.graphql.request(M.GET_GIFT_CARD_OFFER,e)}createGiftCardOrder(e){return this.graphql.request(`
        mutation createGiftCardOrder(
          $giftCardOfferOptionId: String!,
          $valueAmount: CurrencyValueAmountInput!,
          $countryCode: CountryCode!
          $idempotencyKey: String!
        ) {
          createGiftCardOrder(
            giftCardOfferOptionId: $giftCardOfferOptionId,
            valueAmount: $valueAmount,
            countryCode: $countryCode
            idempotencyKey: $idempotencyKey
          ) {
            order {
              ${j}
            }
            externalPaymentSession {
              redirectUrl
              expiresAt
            }
          }
        }
      `,e)}getGiftCardOrder(e){return this.graphql.request(`
        query getGiftCardOrder($orderId: Int!) {
          getGiftCardOrder(orderId: $orderId) {
            ${j}
          }
        }
      `,e)}getGiftCardOrders(e){let t={limit:20,page:1,...e};return this.graphql.request(`
        query getGiftCardOrders(
          $limit: Int!,
          $page: Int!,
          $paymentStatus: [OrderPaymentStatus!],
          $orderStatus: [OrderStatus!]
        ) {
          getGiftCardOrders(
            limit: $limit,
            page: $page,
            paymentStatus: $paymentStatus,
            orderStatus: $orderStatus
          ) {
            items {
              ${j}
            }
            ${Y}
          }
        }
      `,t)}getUserGiftCards(e){return this.graphql.request(`
        query getUserGiftCards(
          $limit: Int!,
          $page: Int!,
          $status: UserGiftCardStatus!
          $sort: UserGiftCardSort
        ) {
          getUserGiftCards(
            limit: $limit,
            page: $page,
            status: $status
            sort: $sort
          ) {
            items {
              ${V}
            }
            ${Y}
          }
        }
      `,e)}getUserGiftCard(e){return this.graphql.request(`
        query getUserGiftCard($id: String!) {
          getUserGiftCard(id: $id) {
            ${V}
            terms
            shortDescription
            disclaimer
            additionalInfo
            ${W}
            cashbackValueAmount {
              ${x}
            }
          }
        }
      `,e)}updateUserGiftCardStatus(e){return this.graphql.request(`
        mutation updateUserGiftCardStatus(
          $id: String!,
          $status: UserGiftCardStatus!,
        ) {
          updateUserGiftCardStatus(
            id: $id,
            status: $status,
          ) {
            ${V}
          }
        }
      `,e)}getUserGiftCardCashbackRewards(e){return this.graphql.request(`
        query getUserGiftCardCashbackRewards($limit: Int!, $page: Int!) {
          getUserGiftCardCashbackRewards(limit: $limit, page: $page) {
            items {
              id
              gainId
              valueAmount {
                ${x}
              }
              status
              giftCard {
                ${V}
              }
            }
            ${Y}
          }
        }
      `,e)}}class z{graphql;constructor(e){this.graphql=e}hasCompletedOffer(){return this.graphql.request(`
      query HasCompletedOffer {
        hasCompletedOffer
      }`)}getOfferSurveyQuestions(e){return this.graphql.request(`
      query getOfferSurveyQuestions($slug: String) {
        getOfferSurveyQuestions(slug: $slug) {
          questions {
            question
          }
        }
      }
    `,e)}}class J extends r.BaseApi{graphql;offersGraphql;kyc;gemSlot;cashout;offers;offerTaskCompletions;userEventTracking;affiliates;activityFeed;onboarding;userHiddenOffer;userProfile;authResource;ghostAccountResource;claimOfferTask;cashbackSupportTicket;cashbackGiftCard;offerQueries;constructor(e){super(e),this.graphql=new n.default({app:this.app}),this.offersGraphql=new n.default({app:this.app},"/fc-offer-gql"),this.kyc=new a.default(this.graphql),this.gemSlot=new i.default(this.graphql),this.cashout=new s.default(this.graphql),this.offers=new E(this.offersGraphql),this.affiliates=new v(this.graphql),this.onboarding=new b(this.graphql),this.userEventTracking=new I({app:this.app}),this.activityFeed=new o.default(this.graphql),this.offerTaskCompletions=new k(this.graphql),this.userHiddenOffer=new U(this.graphql),this.userProfile=new F(this.graphql),this.authResource=new N({app:this.app}),this.ghostAccountResource=new H({app:this.app}),this.claimOfferTask=new D(this.graphql),this.cashbackSupportTicket=new Q(this.graphql),this.cashbackGiftCard=new K(this.graphql),this.offerQueries=new z(this.graphql)}}let X=new J(t.default.env.REACT_APP_API_URL||"");e.s(["default",0,X],892251)}]);

//# debugId=03c3c7b3-643c-9b8f-288e-73ddeed985fe