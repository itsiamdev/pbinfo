#include <iostream>

using namespace std;

int main()
{
    long long n,max1=-99999999,max2=-99999999,k=0;
    while(n!=0)
    {
        cin>>n;
        if(n>max1)
        {
            max2=max1;
            max1=n;
        }
        else if(n>max2 && n!=max1)
        {
            max2=n;
        }
    }
    if(max2==0)
        cout<<"NU EXISTA";

    else
        cout<<max1*max2;

    return 0;
}