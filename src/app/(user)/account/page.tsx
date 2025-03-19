import FormInfoUser from "@/components/user/FormInfoUser";
export default function AccountPage(){
      
    return(
        <div className="pt-20 max-w-[70%] mx-auto h-screen space-y-[5%] ">
            <h1 className="text-center text-darkRed">Thông tin cá nhân</h1>
          <div >
            <FormInfoUser/>
          </div>
        </div>
    )
}