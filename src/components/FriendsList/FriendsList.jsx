import s from "./FriendsList.module.css";

export default function FriendsList({ friendsData }) {
  return (
    <ul>
      {friendsData.map(
        ({
          _id,
          address,
          email,
          imageUrl,
          limageUrl,
          addressUrl,
          phone,
          title,
          url,
          workDays,
        }) => {
          const workingHours =
            workDays && workDays.find((objekt) => objekt.isOpen === true);

          console.log(workingHours);
          // console.log(phone.lenght);
          return (
            <li key={_id}>
              <ul>
                <li>
                  <img src={imageUrl} alt={title} />
                </li>
                <li>
                  <div>
                    {!workingHours ? (
                      <p>Day and night</p>
                    ) : (
                      <p>
                        {workingHours.from}-{workingHours.to}
                      </p>
                    )}
                  </div>
                  <h2>{title}</h2>
                  <a href={addressUrl} target="blank">
                    Email:{email ? email : "website only"}
                  </a>
                  <a href={addressUrl} target="blank">
                    Address:{address ? address : "website only"}
                  </a>
                  <a href={addressUrl} target="blank">
                    Phone:{phone ? phone : "email only"}
                  </a>
                </li>
              </ul>
            </li>
          );
        }
      )}
    </ul>
  );
}
