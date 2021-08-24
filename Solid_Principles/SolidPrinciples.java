/* --------------------------SIMPLE LIBRARY MANAGEMENT PROGRAM------------------------------------------*/

/* All The Classes in this Program Follows Single Responsilbilty Principle*/





//------------------OPEN FOR EXTENSION CLOSED FOR MODIFICATION PRINCIPLE--------------------------

interface Login{
	
	public boolean login();
}

class Student_LogIn
{
	public boolean login(String id, String password)
	{
		System.out.println("Enter Student Id: "+id);
		System.out.println("Enter password: "+password);
		return true;
		
	}
}


class Faculty_LogIn
{
	public boolean login(String id, String password)
	{
		System.out.println("Enter Faculty Id: "+id);
		System.out.println("Enter password: "+password);
		return true;
		
	}
}

class Guest_LogIn
{
	public boolean login(String id, String otp)
	{
		System.out.println("Enter E-mail Id: "+id);
		System.out.println("Enter OTP: "+otp);
		return true;
		
	}
}

//----------------------LISKOV'S SUBSTITUITON PRINCIPLE-----------------------------------

class Details
{
	int[] status= new int[]{ 1,0,1,0,1,1,1,1,1,1 };
	int[] pages= new int[]{ 100,200,123,201,123,156,178,190,111,120 };
	int[] vol= new int[]{ 1,2,3,4,5,4,4,3,2,1 };
	
	void details(int id)
	{
	 System.out.println("The Item with "+this.status[id]  +" is available");
     System.out.println("Number of Pages :" +this.pages[id]);
	  System.out.println("No. of Volumues available:" +this.vol[id]);
	}
}
	 
	
class Book_Details extends Details
{
	
    int[] status= new int[]{ 1,0,1,0,1,1,1,1,1,1 };
	int[] pages= new int[]{ 100,200,123,201,123,156,178,190,111,120 };
	int[] vol= new int[]{ 1,2,3,4,5,4,4,3,2,1 };
	
	void details(int book_id)
	{
	 System.out.println("The Book with "+this.status[book_id]  +"available");
     System.out.println("Number of Pages :" +this.pages[book_id]);
	  System.out.println("No. of Volumues available:" +this.vol[book_id]);
	}
}

class Journal_Details extends Details
{
	
    int[] status= new int[]{ 1,0,1,0,1,1,1,1,1,1 };
	int[] pages= new int[]{ 100,200,123,201,123,156,178,190,111,120 };
	int[] vol= new int[]{ 1,2,3,4,5,4,4,3,2,1 };
	
	void details(int jrnl_id)
	{
	 System.out.println("The Book with "+this.status[jrnl_id]  +"available");
     System.out.println("Number of Pages :" +this.pages[jrnl_id]);
	  System.out.println("No. of Volumues available:" +this.vol[jrnl_id]);
	}

}

//-------------------------------INTERFACE SEGREGATION PRINCIPLE-----------------------------------

interface student_services
{
	public void book_issue(int id);
	public void book_return(int id);
	
}
interface faculty_services
{
   public void publish_journal(int id);
   public void publish_book(int id);
}

class Student_Services implements student_services
{
	public void book_issue(int id)
	{
		System.out.println("The Book with "+id +" is Issued Succesfully");
	}
	
    public void book_return(int id)
	{
		System.out.println("The Book with "+id +" is Returned Succesfully");
	}
	
}

class Faculty_Services implements student_services, faculty_services
{
	public void book_issue(int id)
	{
		System.out.println("The Book with "+id +" is Issued Succesfully");
	}
	
    public void book_return(int id)
	{
		System.out.println("The Book with "+id +" is Returned Succesfully");
	}
	 
	public void publish_journal(int id)
	{
		System.out.println("The Jounal with "+id +" has published Succesfully");
	}
	 public void publish_book(int id)
	{
		System.out.println("The Book with "+id +" has Published Succesfully");
	}
}

	
//-------------------------------DEPENDENCY INVERSION PRINCIPLE------------------------------------

class Librarian
{
	void Add_new_resource(Resource r)
	{
		r.check_status();
	}
}

class Resource
{
	
    void check_status()	
   {
	System.out.println("New resource added to the Library Successfully");
   }
}

class Add_new_Book
{
	void add_new_book()
	{
	Resource r=new Resource();
	Librarian l= new Librarian();
	l.Add_new_resource(new Resource());
	
	}
}


//-------------------------------MAIN METHOD-------------------------------------------------------

public class soliddemo
{
	public static void main(String aa[])
	{
		
		
	 Student_LogIn s=new  Student_LogIn();	
	 s.login("Shiva","s@123");
	 
	 
	 Details D1=new Book_Details();
	 D1.details(5);
	 Details D2=new Journal_Details();
	 D2.details(4);
	 
	 
	 Student_Services ss=new Student_Services();
	 ss.book_issue(542);
	 Faculty_Services fs=new Faculty_Services();
	 fs.publish_journal(525);
	 
	 
	 
	 Add_new_Book a=new Add_new_Book();
	 a.add_new_book();
	}
}
	 
	 