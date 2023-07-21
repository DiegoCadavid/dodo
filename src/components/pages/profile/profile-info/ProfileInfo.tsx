const ProfileInfo = ({}) => {
  return (
    <div className="col-span-3 flex flex-col gap-4">
      <div>
        <h2 className="dodo-heading-primary">DiegoDcm</h2>
        <p className="text-sm text-white/50 ">@diegocadam55</p>
      </div>

      <div className="flex gap-4">
        <p>
          <span className="font-semibold">18</span> Followings
        </p>
        <p>
          <span className="font-semibold">5</span> Followers
        </p>
      </div>

      <p className="">
        Hola!! Me puedes decir Diego y soy un programador random que ama crear
        copias de sitios famosos
      </p>

      <div className="sticky top-30 flex flex-col gap-4">
        <div className="h-36 w-full rounded-lg border border-background-400 bg-background-500"></div>

        <button className="w-full rounded-lg border border-primary-500 py-3 text-primary-500">
          Post to @DiegoDcm
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
