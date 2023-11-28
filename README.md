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


[SidebarItem.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/layout/SidebarItem.tsx)

`SidebarItem` - renders a clickable sidebar item with an icon, label, and optional alert indicator.

The `useRouter` is used  to handle navigation and the `useLoginModal` hook to open the login modal if the item requires authentication and the user is not logged in.

`icons and Labels`

```
<div className="flex flex-row items-center">
  <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
    <Icon size={28} color="white" />
    {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
  </div>
  <div className="relative hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center">
    <Icon size={24} color="white" />
    <p className="hidden lg:block text-white text-xl">
      {label}
    </p>
    {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
  </div>
</div>
```

- This code renders two div elements, one for small screens (hidden on large screens) and one for large screens (hidden on small screens). Each div contains an Icon component with the appropriate size and color, and a p element for the label. The optional alert indicator is rendered as a BsDot icon if the alert prop is true.

`Click Handling:`

```
const handleClick = useCallback(() => {
  if (onClick) {
    return onClick();
  }

  if (auth && !currentUser) {
    loginModal.onOpen();
  } else if (href) {
    router.push(href);
  }
}, [router, href, auth, loginModal, onClick, currentUser]);
```

- This useCallback hook defines the handleClick function, which is used as the onClick handler for the sidebar item. It first checks if the onClick prop exists and calls it if so. Otherwise, it checks if the item requires authentication and the user is not logged in. If so, it opens the login modal using the loginModal.onOpen() function. Finally, if the item has a href prop, it uses the router.push() function to navigate to the specified URL.

`Component Export:`

```
export default SidebarItem;
```

[SidebarLogo.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/layout/SidebarItem.tsx)

`useRouter from next/router:`

```
import { useRouter } from "next/router";
```
- This line imports the useRouter hook from the next/router package. This hook provides access to the current router object, allowing you to navigate between pages and handle routing events.

`BsFillMegaphoneFill from react-icons:`

```
import { BsFillMegaphoneFill } from "react-icons/bs";
```

This line imports the BsFillMegaphoneFill icon from the react-icons/bs package. This icon will be used as the visual representation of the sidebar logo.

### `SidebarLogo Component:`

`Router Navigation:`

```
const router = useRouter();

return (
  <div
    onClick={() => router.push('/')}
    className="
      rounded-full
      h-14
      w-14
      p-4
      flex
      items-center
      justify-center
      hover:bg-teal-400
      hover:bg-opacity-10
      cursor-pointer
    ">
    <BsFillMegaphoneFill size={28} color="white" />
  </div>
);
```

The onClick handler utilizes the router.push() function to redirect the user to the homepage (/) when the logo is clicked.

`Visual Styling:`

The div element is styled using inline CSS classes to achieve the desired visual appearance of the logo.

`Logo Icon:`

The BsFillMegaphoneFill icon is rendered within the div element, using its size and color props to control its appearance.

`Component Export:`

This line exports the SidebarLogo component, making it available for use in other React components.

[SidebarTweetButton.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/layout/SidebarTweetButton.tsx)

`User Authentication Check:`

```
const onClick = useCallback(() => {
  if (!currentUser) {
    return loginModal.onOpen();
  }

  router.push('/');
}, [loginModal, router, currentUser]);
```

- The onClick function is defined using the useCallback hook to ensure efficient re-rendering. It checks if the currentUser exists, indicating whether the user is logged in. If the user is not logged in, it calls the loginModal.onOpen() function to open the login modal. Otherwise, it redirects the user to the homepage (/) using the router.push() function.

`Share Button Rendering:`

```
return (
  <div onClick={onClick}>
    <div className="
      mt-6
      lg:hidden
      rounded-full
      h-14
      w-14
      p-4
      flex
      items-center
      justify-center
      bg-teal-400
      hover:bg-opacity-80
      transition
      cursor-pointer
    ">
      <FaFeather size={24} color="white" />
    </div>
    <div className="
      mt-6
      hidden
      lg:block
      px-4
      py-2
      rounded-full
      bg-teal-400
      hover:bg-opacity-90
      cursor-pointer
    ">
      <p
        className="
          hidden
          lg:block
          text-center
          font-semibold
          text-white
          text-[20px]
        ">
        Post
      </p>
    </div>
  </div>
);
```

- The SidebarshareButton component renders a div element that acts as the clickable container for the share button. The onClick prop of the div element triggers the onClick function.

- Inside the div, there are two nested div elements, one for small screens (hidden on large screens) and one for large screens (hidden on small screens). Both div elements have rounded corners, background color, and hover effects. The small screen div displays the FaFeather icon, and the large screen div displays the text "Post" centered in white.

`Component Export:`

```
export default SidebarshareButton;
```

- This line exports the SidebarshareButton component, making it available for use in other React components.

### `Twitter-Prime-Web-App/components/modals/`

**modals**

[EditModal.tsx](https://github.com/dennisnderitu254/Twitter-Prime-Web-App/blob/main/components/modals/EditModal.tsx)

`Fetching Current User Data:`

```
const { data: currentUser } = useCurrentUser();
```

- The useCurrentUser hook is used to fetch the current user's information. This data is stored in the currentUser state variable.

`Initial Form State:`

```
useEffect(() => {
  if (currentUser) {
    setProfileImage(currentUser?.profileImage);
    setCoverImage(currentUser?.coverImage);
    setName(currentUser?.name);
    setUsername(currentUser?.username);
    setBio(currentUser?.bio);
  }
}, [currentUser]);
```

- The useEffect hook sets the initial state of the form fields based on the fetched user data.

`State Management:`

```
const [profileImage, setProfileImage] = useState('');
const [coverImage, setCoverImage] = useState('');
const [name, setName] = useState('');
const [username, setUsername] = useState('');
const [bio, setBio] = useState('');
```
- The useState hook is used to manage the state of the form fields. Each field has its corresponding state variable, such as profileImage for the profile image URL.

`Form Submission Handling:`

```
const onSubmit = useCallback(async () => {
  try {
    setIsLoading(true);

    await axios.patch('/api/edit', { name, username, bio, profileImage, coverImage });
    mutateFetchedUser();
    toast.success('Updated');
    editModal.onClose();
  } catch (error) {
    toast.error('Something went wrong');
  } finally {
    setIsLoading(false);
  }
}, [editModal, name, username, bio, mutateFetchedUser, profileImage, coverImage]);
```
- The onSubmit function is used to handle form submission. It makes a PATCH request to the /api/edit endpoint with the updated user data. Upon successful submission, it updates the cached user data, displays a success toast, and closes the modal.


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

