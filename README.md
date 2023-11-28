# Twitter Prime

The features in the app include :- Authentication(login and sign up), create comments, Create Posts

Installation

`npm i`

Running the Application

`npm run dev`

This Application implimentation was done in typescript, The database in use in Mongo DB, and the application
was deployed in vercel

Link -  https://twitter-prime-web-app.vercel.app/

Video Explanation - https://youtu.be/bvNho05-8mM?si=NBXVxvXsDJlNT_ix

Application structure

## `components`

`Twitter-Prime-Web-App/components/layout`

**Layout**

[FollowBar.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/layout/FollowBar.tsx)

the FollowBar component is the way to display Twitter users for following. It utilizes the useUsers hook to fetch the relevant data and renders a visually appealing and user-friendly interface.

[Imagecomponent.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/layout/Imagecomponent.tsx)

The MyMap component successfully renders the twitterprime.png image using the next/image component. It ensures proper image loading and applies styling for a rounded, responsive image.

[Sidebar.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/layout/Sidebar.tsx)

`The Sidebar Component` enders the main navigation sidebar for a Twitter-like application. It utilizes the useCurrentUser hook to fetch the current user's information and dynamically displays navigation items based on user authentication.

`Fetching Current User Data:`
```
const { data: currentUser } = useCurrentUser();
```
This line destructures the data property from the useCurrentUser hook and assigns it to a currentUser variable. This variable will be used to determine which navigation items to display based on user authentication.

`Defining Sidebar Items:`

```
const items = [
  {
    icon: BsHouseFill,
    label: 'Home',
    href: '/',
  },
  {
    icon: BsBellFill,
    label: 'Notifications',
    href: '/notifications',
    auth: true,
    alert: currentUser?.hasNotification,
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: `/users/${currentUser?.id}`,
    auth: true,
  },
];
```
This code defines an array of sidebar items with their respective icons, labels, and hrefs (links). The auth property indicates whether the item should only be displayed if the user is authenticated. The alert property is used to indicate whether the notification icon should have an orange alert dot.

`Rendering Sidebar Items:`

```
{items.map((item) => (
  <SidebarItem
    key={item.href}
    alert={item.alert}
    auth={item.auth}
    href={item.href}
    icon={item.icon}
    label={item.label}
  />
))}
```

This code iterates over the items array and renders a SidebarItem component for each item. It passes the item's properties to the SidebarItem component to dynamically render the icon, label, and link.

`Sign Out Button:`

```
{currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
```

This conditional rendering displays a SidebarItem component with a logout icon and label if the currentUser exists. When clicked, it triggers the signOut function from next-auth/react to initiate the sign-out process.

`Post Button:`

```
<SidebarTweetButton />
```

Displays the tweet button


[SidebarItem.tsx]()

[SidebarLogo.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/layout/SidebarItem.tsx)

[SidebarTweetButton.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/layout/SidebarTweetButton.tsx)

**modals**

[EditModal.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/modals/EditModal.tsx)

[LoginModal.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/modals/LoginModal.tsx)

[RegisterModal.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/modals/RegisterModal.tsx)

**posts**

[CommentFeed.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/posts/CommentFeed.tsx)

[CommentItem.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/posts/CommentItem.tsx)

[PostFeed.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/posts/PostFeed.tsx)

[PostItem.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/posts/PostItem.tsx)

**users**

[UserBio.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/users/UserBio.tsx)

[UserHero.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/users/UserHero.tsx)


---------------------------------------------

[Avatar.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/Avatar.tsx)

[Button.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/Button.tsx)

[Form.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/Form.tsx)

[Header.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/Header.tsx)

[ImageUpload.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/ImageUpload.tsx)

[Input.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/Input.tsx)

[Layout.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/Layout.tsx)

[Modal.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/Modal.tsx)

[NotificationsFeed.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/NotificationsFeed.tsx)

## `hooks`

[useCurrentUser.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/useCurrentUser.ts)

[useEditModal.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/useEditModal.ts)

[useFollow.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/useFollow.ts)

[useLike.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/useLike.ts)

[useLoginModal](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/useLoginModal.ts)

[useNotifications.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/useNotifications.ts)

[usePost.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/usePost.ts)

[usePosts.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/usePosts.ts)

[useRegisterModal.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/useRegisterModal.ts)

[useUser.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/useUser.ts)

[useUsers.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/hooks/useUsers.ts)

## `libs`

[fetcher.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/libs/fetcher.ts)

[prismadb.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/libs/prismadb.ts)

[serverAuth.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/libs/serverAuth.ts)

## `pages`

**api**

`api/auth`

[[...nextauth].ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/auth/%5B...nextauth%5D.ts)

`api/notifications`

[[userId].ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/notifications/%5BuserId%5D.ts)

`api/posts`

[[postId].ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/posts/%5BpostId%5D.ts)

[index.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/posts/index.ts)

`api/users`

[[userId].ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/users/%5BuserId%5D.ts)

[index.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/users/index.ts)

------------------------------------------------------------------------------------------------------------------------------------------------

[comments.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/comments.ts)

[current.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/current.ts)

[edit.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/edit.ts)

[follow.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/follow.ts)

[like.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/like.ts)

[register.ts](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/api/register.ts)

**posts**

[[postId].tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/posts/%5BpostId%5D.tsx)


**users**

[[userId].tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/users/%5BuserId%5D.tsx)


[_app.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/_app.tsx)


[index.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/index.tsx)

[notifications.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/notifications.tsx)

[search.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/pages/search.tsx)

---------------------------------------------------------------------------------------------------------

