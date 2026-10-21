#include <iostream>
using namespace std;
///ifstream cin("cartele.in");
///ofstream cout("cartele.out");
int n,k,i,x,n1,S;
int main()
{
    cin>>n;
    for(i=1;i<=n;i++)
    {
        cin>>x;
        if(x>9&&x<100)
            S+=x;
    }
    cout<<S;
    return 0;
}